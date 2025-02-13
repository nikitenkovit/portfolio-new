'use server';

import { z } from 'zod';
import { TelegramService } from '../api/telegram/telegram.service';
import {
	MAX_WORK_DESCRIPTIONS_LENGTH,
	MIN_WORK_TEXT_LENGTH,
} from '../lib/constants/works';

const Message = z
	.string({
		invalid_type_error: 'Сообщение должно быть строкой',
	})
	.min(MIN_WORK_TEXT_LENGTH, {
		message: `Сообщение должно быть не менее ${MIN_WORK_TEXT_LENGTH} символов`,
	})
	.max(MAX_WORK_DESCRIPTIONS_LENGTH, {
		message: `Сообщение должно быть не более ${MAX_WORK_DESCRIPTIONS_LENGTH} символов`,
	});

export type ContactActionState = {
	fieldValue?: string;
	error?: string[];
	notice?: string;
	isSuccess?: boolean;
};

export async function sendMessage(
	_prevState: ContactActionState,
	formData: FormData
) {
	'use server';

	const message = (formData.get('message') as string) || '';

	const validatedFields = Message.safeParse(message);

	if (!validatedFields.success) {
		return {
			fieldValue: message,
			error: validatedFields.error.formErrors.formErrors,
			notice: 'Пропущены обязательные поля',
		};
	}

	const text = validatedFields.data;

	try {
		const telegramService = new TelegramService();
		await telegramService.sendMessage(text);

		return {
			notice: 'Сообщение успешно отправлено',
			isSuccess: true,
		};
	} catch (error) {
		return {
			fieldValue: message,
			notice: `Телеграм сервис: ${error}`,
		};
	}
}
