import { getTelegramConfig } from '@/app/configs/telegram.config';
import { ITelegramOptions } from '@/app/lib/types/telegram-config.interface';
import { Telegraf } from 'telegraf';
import { TelegramServiceInterface } from './telegram.interface';

export class TelegramService implements TelegramServiceInterface {
	private bot: Telegraf;
	private options: ITelegramOptions;

	constructor() {
		this.options = getTelegramConfig();
		this.bot = new Telegraf(this.options.token);
	}

	async sendMessage(
		message: string,
		chatId = this.options.chatId
	): Promise<void> {
		await this.bot.telegram.sendMessage(chatId, message);
	}
}
