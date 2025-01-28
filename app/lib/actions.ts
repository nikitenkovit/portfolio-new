'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { UserFormState } from './types/form.type';

export async function authenticate(
	_prevState: UserFormState | undefined,
	formData: FormData
) {
	try {
		await signIn('credentials', formData);
		// TODO Убрать вывод в консоль!
		console.log('УРА!!!!');
	} catch (error) {
		if (error instanceof AuthError) {
			const email = (formData.get('email') || '') as string;
			const password = (formData.get('password') || '') as string;
			switch (error.type) {
				case 'CredentialsSignin':
					return {
						fields: { email, password },
						error:
							'Ошибка авторизации. Пожалуйста, проверьте правильность введенных данных',
					};
				default:
					return {
						fields: { email, password },
						error: 'Что-то пошло не так. Пожалуйста попробуйте еще раз',
					};
			}
		}
		throw error;
	}
}
