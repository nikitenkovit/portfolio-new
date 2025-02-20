import { User } from '@prisma/client';
import { ERROR_TEXT } from '../../constants';
import { prisma } from '../../db';
import { UserServiceInterface } from './user.interface';

class UserService implements UserServiceInterface {
	public async getUser(email: string): Promise<User | undefined> {
		try {
			const user = await prisma.user.findUnique({ where: { email: email } });
			if (user) {
				return user;
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new Error(error.message);
			} else {
				throw new Error(ERROR_TEXT.SERVER);
			}
		}
	}
}

export default new UserService();
