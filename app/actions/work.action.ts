'use server';

import { WorkService } from '@/app/api/work/work.service';
import { CURRENT_YEAR } from '@/app/lib/constants/common';
import {
	MAX_FILE_SIZE,
	MAX_WORK_DESCRIPTIONS_LENGTH,
	MAX_WORK_TEXT_LENGTH,
	MAX_WORK_TITLE_LENGTH,
	MIN_WORK_TEXT_LENGTH,
} from '@/app/lib/constants/works';
import { Link } from '@/app/lib/types/links.type';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { ERROR_TEXT } from '../lib/constants/auth';

const FormSchema = z
	.object({
		year: z.coerce
			.number({
				required_error: 'Заполните год',
				invalid_type_error: 'Год должен быть числом',
			})
			.gt(2019, { message: 'Год должен быть больше 2019' })
			.lte(CURRENT_YEAR, { message: 'Год не может быть больше текущего' })
			.transform(String),
		title: z
			.string({
				invalid_type_error: 'Заполните название',
			})
			.min(MIN_WORK_TEXT_LENGTH, {
				message: `Название должно быть не менее ${MIN_WORK_TEXT_LENGTH} символов`,
			})
			.max(MAX_WORK_TITLE_LENGTH, {
				message: `Название должно быть не более ${MAX_WORK_TITLE_LENGTH} символов`,
			}),
		description: z
			.string({
				invalid_type_error: 'Заполните описание',
			})
			.min(MIN_WORK_TEXT_LENGTH, {
				message: `Описание должно быть не менее ${MIN_WORK_TEXT_LENGTH} символов`,
			})
			.max(MAX_WORK_DESCRIPTIONS_LENGTH, {
				message: `Описание должно быть не более ${MAX_WORK_DESCRIPTIONS_LENGTH} символов`,
			}),
		technologies: z
			.string({
				invalid_type_error: 'Заполните технологии',
			})
			.min(MIN_WORK_TEXT_LENGTH, {
				message: `Технологии должно быть не менее ${MIN_WORK_TEXT_LENGTH} символов`,
			})
			.max(MAX_WORK_TEXT_LENGTH, {
				message: `Технологии должно быть не более ${MAX_WORK_TEXT_LENGTH} символов`,
			}),
		link: z.string().max(MAX_WORK_TEXT_LENGTH, {
			message: `Ссылка должна быть не более ${MAX_WORK_TEXT_LENGTH} символов`,
		}),
		githubLink: z.string().max(MAX_WORK_TEXT_LENGTH, {
			message: `Ссылка должна быть не более ${MAX_WORK_TEXT_LENGTH} символов`,
		}),
		image: z
			.instanceof(File)
			.refine(
				(file) => {
					if (!file || file?.name === 'undefined' || file?.name === undefined) {
						return true;
					}

					return [
						'image/png',
						'image/jpeg',
						'image/jpg',
						'image/svg+xml',
					].includes(file.type);
				},
				{
					message:
						'Тип изображения должен быть один из: png, jpeg, jpg, svg+xml',
				}
			)
			.refine((file) => file.size <= MAX_FILE_SIZE, {
				message: 'Максимальный размер изображения 4MB',
			}),
	})
	.strict();

const Work = FormSchema;

export type WorkActionState = {
	id?: string;
	fieldsValue?: {
		year?: string | number;
		title?: string;
		description?: string;
		technologies?: string;
		link?: string;
		githubLink?: string;
	};
	errors?: {
		year?: string[];
		title?: string[];
		description?: string[];
		technologies?: string[];
		link?: string[];
		githubLink?: string[];
		image?: string[];
	};
	message?: string | null;
};

export async function createOrUpdateWork(
	prevState: WorkActionState,
	formData: FormData
) {
	'use server';

	const id = prevState.id;
	const year = (formData.get('year') as string) || '';
	const title = (formData.get('title') as string) || '';
	const description = (formData.get('description') as string) || '';
	const technologies = (formData.get('technologies') as string) || '';
	const link = (formData.get('link') as string) || '';
	const githubLink = (formData.get('githubLink') as string) || '';
	const image = formData.get('image') as File;

	const validatedFields = Work.safeParse({
		year,
		title,
		description,
		technologies,
		link,
		githubLink,
		image,
	});

	if (!validatedFields.success) {
		return {
			id,
			fieldsValue: {
				year,
				title,
				description,
				technologies,
				link,
				githubLink,
			},
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Пропущены обязательные поля',
		};
	}

	const data = validatedFields.data;

	let slug;

	try {
		const workService = new WorkService();
		if (id) {
			slug = await workService.update(id, data);
		} else {
			slug = await workService.create(data);
		}
	} catch (error) {
		return {
			fieldsValue: {
				year,
				title,
				description,
				technologies,
				link,
				githubLink,
			},
			message: `БД: ${error}`,
		};
	}

	// TODO: Подумать над оптимизацией
	revalidatePath(Link.Works);
	revalidatePath(`${Link.Works}/${slug}`);
	redirect(`${Link.Works}/${slug}`);
}

export async function removeWork(slug: string) {
	const workService = new WorkService();

	try {
		await workService.delete(slug);
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error(ERROR_TEXT.SERVER);
		}
	}

	// TODO: Подумать над оптимизацией
	revalidatePath(Link.Works);
	redirect(Link.Works);
}
