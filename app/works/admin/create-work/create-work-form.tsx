'use client';

import { createWork, CreateWorkState } from '@/app/api/work/actions';
import { MainButtonWrapper, TextInput } from '@/app/components';
import { Hint } from '@/app/components/hint/hint';
import { TextareaInput } from '@/app/components/inputs/textarea-input';
import { CURRENT_YEAR } from '@/app/lib/constants/common';
import {
	MAX_WORK_DESCRIPTIONS_LENGTH,
	MAX_WORK_TEXT_LENGTH,
	MAX_WORK_TITLE_LENGTH,
} from '@/app/lib/constants/works';
import { useInputFocus } from '@/app/lib/hooks/use-input-focus';
import { MutableRefObject, useActionState } from 'react';
import styles from './create-work-form.module.scss';

export const CreateWorkForm = () => {
	const { inputRef } = useInputFocus();
	const initialState: CreateWorkState = {
		message: null,
		errors: {},
		fieldsValue: { year: CURRENT_YEAR },
	};
	const [{ message, errors, fieldsValue }, formAction, isPending] =
		useActionState(createWork, initialState);

	return (
		<form action={formAction} className={styles.form}>
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
					width="100%"
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
			{message && <div className={styles.message}>{message}</div>}
			<MainButtonWrapper iconName="IoIosAddCircleOutline" pending={isPending}>
				<button type="submit">Создать</button>
			</MainButtonWrapper>
		</form>
	);
};
