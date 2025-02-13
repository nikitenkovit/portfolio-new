import { API_URL } from '../constants/api';
import { ITelegramOptions } from '../types/telegram-config.interface';

// FIXME: Сделать получения адресов везде через функции
export const getWorkUrl = (slug: string) => `${API_URL}/work?slug=${slug}`;
export const getWorksUrl = () => `${API_URL}/works`;

export const getTelegramConfig = (): ITelegramOptions => ({
	chatId: process.env.TELEGRAM_CHAT_ID!,
	token: process.env.TELEGRAM_TOKEN!,
});
