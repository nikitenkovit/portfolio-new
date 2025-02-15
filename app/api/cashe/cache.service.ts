// FIXME: Или доделать или удалить!!!
// class CacheService {
// 	private client: redis.RedisClient;

// 	constructor() {
// 		this.client = redis.createClient();
// 	}

// 	async setLastMessageTime(ip: string, timestamp: number): Promise<void> {
// 		return new Promise((resolve, reject) => {
// 			this.client.set(ip, timestamp.toString(), (err) => {
// 				if (err) {
// 					reject(err);
// 				} else {
// 					resolve();
// 				}
// 			});
// 		});
// 	}

// 	async getLastMessageTime(ip: string): Promise<number | null> {
// 		return new Promise((resolve, reject) => {
// 			this.client.get(ip, (err, reply) => {
// 				if (err) {
// 					reject(err);
// 				} else {
// 					resolve(reply ? parseInt(reply) : null);
// 				}
// 			});
// 		});
// 	}

// 	// Добавьте другие методы здесь
// }

// export default new CacheService();
