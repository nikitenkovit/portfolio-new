'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import { Hint, MainButtonWrapper, TextInput } from '../lib/components';
import { AppLink } from '../lib/types';
import { getAuthError } from '../lib/utils';
import styles from './form.module.scss';

export function SignInForm() {
	const router = useRouter();
	// FIXME: добавить isFetching для кнопки отправки
	const [error, setError] = useState<string | undefined>(undefined);
	// FIXME: сделать валидацию с помощью useFormContext

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		// FIXME: сделать шифрование передаваемого пароля
		const res = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false,
		});

		if (res && !res.error) {
			router.push(AppLink.Admin);
		} else {
			setError(getAuthError(res?.error));
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<Hint text={error}>
				<TextInput
					id="email"
					type="email"
					name="email"
					width="100%"
					placeholder="Email"
					required
				/>
			</Hint>
			<TextInput
				id="password"
				type="password"
				name="password"
				width="100%"
				placeholder="Password"
				required
			/>
			<MainButtonWrapper iconName="RiLoginCircleLine">
				<button type="submit">Войти</button>
			</MainButtonWrapper>
		</form>
	);
}
