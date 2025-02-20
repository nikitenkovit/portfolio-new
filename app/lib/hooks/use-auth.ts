'use client';

import { useSession } from 'next-auth/react';
import { AuthStatus } from '../constants';

export const useAuth = () => {
	const session = useSession();
	// TODO: Сделать саспенс и скелетон на значке страниц авторизации и админа !!!!!ИВЕЗДЕ ГДЕ ИСПОЛЬЗУЕТСЯ ПРОВЕРКА АВТОРИЗАЦИИ!!!!

	const user = session.data?.user;
	const isAuthenticated = session.status === AuthStatus.Authenticated;

	return { user, isAuthenticated };
};
