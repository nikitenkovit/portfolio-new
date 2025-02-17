import type { RedisClientType } from 'redis';
import { createClient } from 'redis';
// FIXME: Сдлеать все что импортируется из lib, что бы импортировалось по индекс файлу!
import { ONE_HOUR_IN_SECONDS } from '../../lib/constants/common';
import { getCurrentTimeInSecond } from '../../lib/utils/common';
import { CacheServiceInterface } from './cache.interface';

// redis-server - запуск локально в проекте
// brew services start redis - запуск глобально на машине
// brew services info redis - вывод информации о сервисе
// brew services stop redis - остановка сервиса

// redis-cli - После запуска Redis вы можете протестировать его, выполнив redis-cli:
// redis-cli ping /=> "PONG"

declare global {
	var __cacheService: CacheService | undefined;
}

export class CacheService implements CacheServiceInterface {
	private client: RedisClientType;

	private constructor() {
		this.client = createClient();

		this.client.on('connect', () => {
			console.info('Подключение к серверу Redis установлено');
		});

		this.client.on('error', (err) => {
			console.warn('Ошибка при подключении к серверу Redis:', err);
		});
	}

	static getInstance(): CacheService {
		if (global.__cacheService) {
			return global.__cacheService;
		}

		global.__cacheService = new CacheService();
		return global.__cacheService;
	}

	async connect(): Promise<void> {
		await this.client.connect();
	}

	isConnected(): boolean {
		return this.client.isReady;
	}

	async setTime(key: string | null, timestamp: number): Promise<void> {
		if (key && this.isConnected()) {
			await this.client.set(key, timestamp.toString());
			await this.client.expire(key, ONE_HOUR_IN_SECONDS);
		}
	}

	async getTime(key: string | null): Promise<number | null> {
		if (key && this.isConnected()) {
			const reply = await this.client.get(key);
			return reply ? parseInt(reply) : null;
		}
		return null;
	}

	async getRemainingTime(
		key: string | null,
		interval: number
	): Promise<number> {
		if (key && this.isConnected()) {
			const lastTime = await this.getTime(key);
			if (lastTime === null) {
				return 0;
			}
			const currentTime = getCurrentTimeInSecond();
			return Math.max(0, interval - (currentTime - lastTime));
		}
		return 0;
	}

	async canPerformActionWithTime(
		key: string | null,
		interval: number
	): Promise<boolean> {
		if (key && this.isConnected()) {
			const remainingTime = await this.getRemainingTime(key, interval);

			return remainingTime === 0;
		}
		return true;
	}
}
