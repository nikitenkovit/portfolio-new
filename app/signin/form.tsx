'use client';
import { useActionState } from 'react';
import { login, LoginActionState } from '../lib/actions';
import { Hint, MainForm, TextInput } from '../lib/components';
import { NotificationStatus } from '../lib/types';

export function SignInForm() {
	const initialState: LoginActionState = {
		notice: null,
		errors: {},
		fieldsValue: {
			email: '',
			password: '',
		},
	};

	const [{ notice, errors, fieldsValue }, formAction, isPending] =
		useActionState(login, initialState);

	return (
		<MainForm
			formAction={formAction}
			iconName="RiLoginCircleLine"
			buttonName="Войти"
			isPending={isPending}
			notice={notice}
			noticeVariant={NotificationStatus.Error}
		>
			<Hint text={errors?.email?.join('\n\n')} variant="red">
				<TextInput
					id="email"
					type="email"
					name="email"
					width="100%"
					placeholder="Email"
					defaultValue={fieldsValue?.email}
					required
				/>
			</Hint>
			<Hint text={errors?.password?.join('\n\n')} variant="red">
				<TextInput
					id="password"
					type="password"
					name="password"
					width="100%"
					placeholder="Password"
					defaultValue={fieldsValue?.password}
					required
				/>
			</Hint>
		</MainForm>
	);
}
