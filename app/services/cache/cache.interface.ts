export interface CacheServiceInterface {
	isConnected(): boolean;
	connect(): Promise<void>;
	setTime(key: string | null, timestamp: number): Promise<void>;
	getTime(key: string | null): Promise<number | null>;
	getRemainingTime(key: string | null, interval: number): Promise<number>;
	canPerformActionWithTime(
		key: string | null,
		interval: number
	): Promise<boolean>;
}
