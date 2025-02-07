import { authConfig } from '@/app/configs/auth/auth.config';
import { ERROR_TEXT } from '@/app/lib/constants/auth';
import { prisma } from '@/app/lib/db';
import { User } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
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
