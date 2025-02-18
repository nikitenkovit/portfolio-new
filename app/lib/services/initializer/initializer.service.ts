import { CacheService } from '../cache';
import { InitializerServiceInterface } from './initializer.interface';

class ServiceInitializer implements InitializerServiceInterface {
	private cacheService: CacheService;

	constructor() {
		this.cacheService = CacheService.getInstance();
	}

	async initialize(): Promise<void> {
		await this.cacheService.connect();
	}
}

export default new ServiceInitializer();
