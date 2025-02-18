import { ITelegramOptions } from '../types/telegram-config.interface';

export const getTelegramConfig = (): ITelegramOptions => ({
	chatId: process.env.TELEGRAM_CHAT_ID!,
	token: process.env.TELEGRAM_TOKEN!,
});
