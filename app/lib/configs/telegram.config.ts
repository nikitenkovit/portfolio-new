import type { TelegramOptions } from '../types';

export const getTelegramConfig = (): TelegramOptions => ({
	chatId: process.env.TELEGRAM_CHAT_ID!,
	token: process.env.TELEGRAM_TOKEN!,
});
