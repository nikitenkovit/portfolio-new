// import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
// import pool from './app/lib/db';
import { authConfig } from './auth.config';

// TODO Убрать закомментированный код!
// async function getUser(email: string): Promise<User | undefined> {
async function getUser(email: string): Promise<any | undefined> {
	console.log('getUser email', email);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(
				JSON.stringify({
					id: 1,
					email: 'test@test.ru',
					name: 'Test',
					password: '123456',
				})
			);
		}, 5000);
	});
	// TODO Убрать закомментированный код!
	// try {
	// 	const user = await pool.query(`SELECT * FROM users WHERE email='${email}'`);
	// 	return user.rows[0];
	// } catch (error) {
	// 	console.error('Failed to fetch user:', error);
	// 	throw new Error('Failed to fetch user.');
	// }
}

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(6) })
					.safeParse(credentials);

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;

					const user = await getUser(email);
					if (!user) return null;
					const passwordsMatch = await bcrypt.compare(password, user.password);

					if (passwordsMatch) return user;
				}

				console.log('Invalid credentials');
				return null;
			},
		}),
	],
});
