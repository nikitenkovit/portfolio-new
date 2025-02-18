import bcrypt from 'bcrypt';
import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { z } from 'zod';
import { AuthService } from '../../services';
import { Link } from '../types/links.type';

export const authConfig: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		Credentials({
			credentials: {
				email: { label: 'email', type: 'email', required: true },
				password: { label: 'password', type: 'password', required: true },
			},
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(6) })
					.safeParse(credentials);

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data;

					const user = await new AuthService().getUser(email);
					if (!user) return null;
					const passwordsMatch = await bcrypt.compare(password, user.password);

					const { password: _pass, ...userWithoutPass } = user;

					if (_pass && passwordsMatch) return userWithoutPass;
				}

				return null;
			},
		}),
	],
	pages: {
		signIn: Link.Signin,
	},
};
