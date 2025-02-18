import { User } from '@prisma/client';

export interface AuthServiceInterface {
	getUser(email: string): Promise<User | undefined>;
	checkUserAuthorization(): Promise<boolean>;
}
