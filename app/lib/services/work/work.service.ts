import { Work } from '@prisma/client';
import { ERROR_TEXT } from '../../constants';
import { prisma } from '../../db';
import type { WorkPayload } from '../../types';
import { generateSlug } from '../../utils';
import { FileService } from '../file';
import { WorkServiceInterface } from './work.interface';

class WorkService implements WorkServiceInterface {
	private fileService: FileService;

	constructor() {
		this.fileService = new FileService();
	}

	public async getMany(): Promise<Work[]> {
		return await prisma.work.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		});
	}

	public async getBySlug(slug: string): Promise<Work | null> {
		return await prisma.work.findUnique({
			where: {
				slug,
			},
		});
	}

	public async create(work: WorkPayload): Promise<string | undefined> {
		const slug = generateSlug(work.title);

		const { id } = await prisma.work.create({
			data: { ...work, slug, image: undefined },
		});

		if (work.image?.name && work.image.size > 0 && id) {
			try {
				const image = await this.fileService.save(`works/${id}`, work.image);

				await prisma.work.update({
					where: {
						id,
					},
					data: { image },
				});
			} catch (_e) {
				throw new Error(ERROR_TEXT.SAVE_IMAGE_IN_CREATE_WORK);
			}
		}

		return slug;
	}

	public async update(
		id: string,
		work: WorkPayload
	): Promise<string | undefined> {
		const existingWork = await prisma.work.findUnique({
			where: {
				id,
			},
		});

		if (!existingWork) {
			throw new Error(ERROR_TEXT.NOT_FOUND);
		}

		const slug = generateSlug(work.title);

		const image = await this.fileService.save(`works/${id}`, work.image);

		await prisma.work.update({
			where: {
				id,
			},
			data: { ...work, slug, image },
		});

		return slug;
	}

	public async delete(id: string): Promise<void> {
		const existingWork = await prisma.work.findUnique({
			where: {
				id,
			},
		});

		if (!existingWork) {
			throw new Error(ERROR_TEXT.NOT_FOUND);
		}

		await prisma.work.delete({
			where: {
				id,
			},
		});

		if (existingWork.image) {
			try {
				await this.fileService.deleteFolder(`works/${id}`);
			} catch (_e) {
				throw new Error(ERROR_TEXT.REMOVE_FOLDER_IN_REMOVE_WORK);
			}
		}
	}
}

export default new WorkService();
