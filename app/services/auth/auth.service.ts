import { User } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authConfig } from '../../lib/configs';
import { ERROR_TEXT } from '../../lib/constants';
import { prisma } from '../../lib/db';
import { AuthServiceInterface } from './auth.interface';

export class AuthService implements AuthServiceInterface {
	public async getUser(email: string): Promise<User | undefined> {
		try {
			const user = await prisma.user.findUnique({ where: { email: email } });
			if (user) {
				return user;
			}
		} catch (error) {
			throw new Error(ERROR_TEXT.NOT_AUTHORIZED);
		}
	}

	public async checkUserAuthorization(): Promise<boolean> {
		const session = await getServerSession(authConfig);

		return Boolean(session?.user);
	}
}
