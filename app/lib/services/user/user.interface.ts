import { User } from '@prisma/client';

export interface UserServiceInterface {
	getUser(email: string): Promise<User | undefined>;
}
