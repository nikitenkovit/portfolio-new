'use server';

import { z } from 'zod';
import {
	MAX_WORK_DESCRIPTIONS_LENGTH,
	MIN_WORK_TEXT_LENGTH,
} from '../lib/constants/works';
import { NotificationStatus } from '../lib/types/notification-status.type';
import { TelegramService } from '../services/telegram/telegram.service';

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
	status: NotificationStatus;
};

// FIXME: export default new RedisService(); => сделать так же в других сервисах!

export async function sendMessage(
	_prevState: ContactActionState,
	formData: FormData
) {
	'use server';

	const message = (formData.get('message') as string) ?? '';
	const userIP = (formData.get('userIP') as string) ?? null;

	const validatedFields = Message.safeParse(message);

	if (!validatedFields.success) {
		return {
			status: NotificationStatus.Error,
			fieldValue: message,
			error: validatedFields.error.formErrors.formErrors,
			notice: 'Напишите ваше сообщение',
		};
	}

	const text = validatedFields.data;

	try {
		const telegramService = new TelegramService();
		const warning = await telegramService.sendMessage(userIP, text);

		if (warning) {
			return {
				status: NotificationStatus.Warning,
				fieldValue: message,
				notice: warning,
			};
		}

		return {
			status: NotificationStatus.Success,
			notice: 'Сообщение успешно отправлено',
		};
	} catch (error) {
		return {
			status: NotificationStatus.Error,
			fieldValue: message,
			notice: `Телеграм сервис: ${error}`,
		};
	}
}
