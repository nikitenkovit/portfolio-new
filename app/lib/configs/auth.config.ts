import { NextAuthConfig } from 'next-auth';

import { AppLink } from '../types';

export const authConfig: NextAuthConfig = {
	pages: {
		signIn: AppLink.Signin,
	},
	session: {
		strategy: 'jwt',
	},
	providers: [],
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnAdminPage = nextUrl.pathname.startsWith(AppLink.Admin);
			const isOnSigninPage = nextUrl.pathname.startsWith(AppLink.Signin);

			if (isLoggedIn && isOnSigninPage) {
				return Response.redirect(new URL(AppLink.Admin, nextUrl));
			}
			if (!isLoggedIn && isOnAdminPage) {
				return false;
			}

			return true;
		},
	},
};
