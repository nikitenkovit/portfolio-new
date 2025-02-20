'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { signIn } from '../../../auth';
import {
	ERROR_TEXT,
	MAX_EMAIL_LENGTH,
	MAX_PASSWORD_LENGTH,
	MIN_PASSWORD_LENGTH,
} from '../constants';
import { AppLink } from '../types';

const LoginSchema = z
	.object({
		email: z
			.string()
			.email()
			.max(MAX_EMAIL_LENGTH, {
				message: `Email должен быть не более ${MAX_EMAIL_LENGTH} символов`,
			}),
		password: z
			.string()
			.min(MIN_PASSWORD_LENGTH, {
				message: `Пароль должен быть не менее ${MIN_PASSWORD_LENGTH} и не более ${MAX_PASSWORD_LENGTH} символов`,
			})
			.max(MAX_PASSWORD_LENGTH, {
				message: `Пароль должен быть не менее ${MIN_PASSWORD_LENGTH} и не более ${MAX_PASSWORD_LENGTH} символов`,
			}),
	})
	.strict();

const Login = LoginSchema;

export type LoginActionState = {
	fieldsValue?: {
		email?: string;
		password?: string;
	};
	errors?: {
		email?: string[];
		password?: string[];
	};
	notice?: string | null;
};

export async function login(_prevState: LoginActionState, formData: FormData) {
	'use server';

	const email = (formData.get('email') as string) || '';
	const password = (formData.get('password') as string) || '';

	const validatedFields = Login.safeParse({
		email,
		password,
	});

	if (!validatedFields.success) {
		return {
			fieldsValue: {
				email,
				password,
			},
			errors: validatedFields.error.flatten().fieldErrors,
			notice: ERROR_TEXT.FORM_NOT_VALID,
		};
	}

	const data = validatedFields.data;

	try {
		await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		});
	} catch (error: unknown) {
		let notice;

		if (error instanceof Error) {
			notice = error.message;
		} else {
			notice = ERROR_TEXT.ANY;
		}

		return {
			fieldsValue: {
				email,
				password,
			},
			notice,
		};
	}

	redirect(AppLink.Admin);
}
