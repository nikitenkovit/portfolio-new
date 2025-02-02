'use client';

import { useSession } from 'next-auth/react';
import { AuthStatus } from '../constants/auth';

export const useAuth = () => {
	const session = useSession();

	const user = session.data?.user;
	const isAuthenticated = session.status === AuthStatus.Authenticated;

	return { user, isAuthenticated };
};
