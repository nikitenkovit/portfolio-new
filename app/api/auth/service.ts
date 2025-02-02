import { prisma } from '@/app/lib/db';
import { User } from '@prisma/client';

export async function getUser(email: string): Promise<User | undefined> {
	try {
		const user = await prisma.user.findUnique({ where: { email: email } });
		if (user) {
			return user;
		}
	} catch (error) {
		console.error('Failed to fetch user:', error);
		throw new Error('Failed to fetch user.');
	}
}
