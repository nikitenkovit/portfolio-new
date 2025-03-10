import { Telegraf } from 'telegraf';

import { getTelegramConfig } from '../../configs';
import { ONE_MINUTE_IN_SECONDS } from '../../constants';
import type { TelegramOptions } from '../../types';
import { getCurrentTimeInSecond, getTelegramWarningMessage } from '../../utils';
import { CacheService } from '../cache';
import { TelegramServiceInterface } from './telegram.interface';

class TelegramService implements TelegramServiceInterface {
	private bot: Telegraf;
	private options: TelegramOptions;
	private cacheService: CacheService;

	constructor() {
		this.cacheService = CacheService.getInstance();
		this.options = getTelegramConfig();
		this.bot = new Telegraf(this.options.token);
	}

	async sendMessage(
		ip: string,
		message: string,
		chatId = this.options.chatId
	): Promise<string | void> {
		const isCanSendMessage = await this.cacheService.canPerformActionWithTime(
			ip,
			ONE_MINUTE_IN_SECONDS
		);
		if (isCanSendMessage) {
			await this.bot.telegram.sendMessage(chatId, message);
			await this.cacheService.setTime(ip, getCurrentTimeInSecond());
		} else {
			const remainingTime = await this.cacheService.getRemainingTime(
				ip,
				ONE_MINUTE_IN_SECONDS
			);
			return getTelegramWarningMessage(
				ONE_MINUTE_IN_SECONDS,
				Math.ceil(remainingTime)
			);
		}
	}
}

export default new TelegramService();
