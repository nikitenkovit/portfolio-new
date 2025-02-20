import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { authConfig } from './app/lib/configs';
import { ERROR_TEXT } from './app/lib/constants';
import { UserService } from './app/lib/services';

export const {
	handlers,
	signIn,
	signOut,
	auth,
	unstable_update: update,
} = NextAuth({
	...authConfig,
	providers: [
		GoogleProvider,
		GitHubProvider,
		Credentials({
			credentials: {
				email: { label: 'email', type: 'email', required: true },
				password: { label: 'password', type: 'password', required: true },
			},

			async authorize(credentials) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
				// валидация полей происходит в серверном екшене app/lib/actions/auth.action.ts
				const user = await UserService.getUser(email);

				if (!user) {
					throw new Error(ERROR_TEXT.AUTH_CREDENTIALS);
				}

				const passwordsMatch = await bcrypt.compare(password, user.password);

				if (!passwordsMatch) {
					throw new Error(ERROR_TEXT.AUTH_CREDENTIALS);
				}

				const { password: _pass, ...userWithoutPass } = user;

				return userWithoutPass;
			},
		}),
	],
});
