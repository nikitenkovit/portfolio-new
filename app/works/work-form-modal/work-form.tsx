'use client';

import { createOrUpdateWork, WorkActionState } from '@/app/actions/work.action';
import { TextInput } from '@/app/components';
import { Hint } from '@/app/components/hint/hint';
import { TextareaInput } from '@/app/components/inputs/textarea-input';
import { MainForm } from '@/app/components/main-form/main-form';
import { CURRENT_YEAR } from '@/app/lib/constants/common';
import {
	MAX_WORK_DESCRIPTIONS_LENGTH,
	MAX_WORK_TEXT_LENGTH,
	MAX_WORK_TITLE_LENGTH,
} from '@/app/lib/constants/works';
import { useInputFocus } from '@/app/lib/hooks/use-input-focus';
import { Work } from '@prisma/client';
import { MutableRefObject, useActionState } from 'react';
import styles from './work-form.module.scss';

export const WorkForm = ({ work }: { work?: Work }) => {
	const { inputRef } = useInputFocus();
	const initialState: WorkActionState = {
		id: work?.id,
		notice: null,
		errors: {},
		fieldsValue: {
			title: work?.title,
			technologies: work?.technologies,
			link: work?.link || undefined,
			githubLink: work?.githubLink || undefined,
			description: work?.description,
			year: work?.year || CURRENT_YEAR,
		},
	};
	const [{ notice, errors, fieldsValue, id }, formAction, isPending] =
		useActionState(createOrUpdateWork, initialState);

	return (
		<MainForm
			formAction={formAction}
			iconName={id ? 'GrEdit' : 'IoIosAddCircleOutline'}
			buttonName={id ? 'Изменить' : 'Создать'}
			isPending={isPending}
			notice={notice}
			style={{ marginTop: '30px' }}
		>
			<Hint text={errors?.title?.join('\n\n')} variant="red">
				<TextInput
					ref={inputRef as MutableRefObject<HTMLInputElement | null>}
					id="title"
					type="text"
					name="title"
					width="100%"
					placeholder="Название"
					bgColor="secondary"
					maxLength={MAX_WORK_TITLE_LENGTH}
					defaultValue={fieldsValue?.title}
					required
				/>
			</Hint>
			<Hint text={errors?.technologies?.join('\n\n')} variant="red">
				<TextInput
					id="technologies"
					type="text"
					name="technologies"
					width="100%"
					placeholder="Технологии"
					bgColor="secondary"
					maxLength={MAX_WORK_TEXT_LENGTH}
					defaultValue={fieldsValue?.technologies}
					required
				/>
			</Hint>
			<TextInput
				id="link"
				type="url"
				name="link"
				width="100%"
				placeholder="Ссылка на работу"
				bgColor="secondary"
				maxLength={MAX_WORK_TEXT_LENGTH}
				defaultValue={fieldsValue?.link}
			/>
			<TextInput
				id="githubLink"
				type="url"
				name="githubLink"
				width="100%"
				placeholder="Ссылка на GitHub"
				bgColor="secondary"
				maxLength={MAX_WORK_TEXT_LENGTH}
				defaultValue={fieldsValue?.githubLink}
			/>
			<Hint text={errors?.image?.join('\n\n')} variant="red">
				<TextInput
					id="image"
					type="file"
					name="image"
					width="100%"
					placeholder="Изображение"
					bgColor="secondary"
				/>
			</Hint>
			<Hint text={errors?.description?.join('\n\n')} variant="red">
				<TextareaInput
					id="description"
					name="description"
					placeholder="Описание"
					bgColor="secondary"
					maxLength={MAX_WORK_DESCRIPTIONS_LENGTH}
					rows={5}
					defaultValue={fieldsValue?.description}
					required
				/>
			</Hint>
			<div className={styles.year}>
				<Hint text={errors?.year?.join('\n\n')} variant="red">
					<TextInput
						id="year"
						type="number"
						name="year"
						width="228px"
						placeholder="Год"
						bgColor="secondary"
						maxLength={4}
						defaultValue={fieldsValue?.year}
						required
					/>
				</Hint>
			</div>
		</MainForm>
	);
};
