'use client';

import { useActionState } from 'react';
import { MainButtonWrapper, Modal, TextInput } from '../components';
import { authenticate } from '../lib/actions';
import styles from './login.module.scss';

export default function LoginModal({ onClose }: { onClose: () => void }) {
	const [state, formAction, isPending] = useActionState(authenticate, {
		fields: {
			email: '',
			password: '',
		},
		error: '',
	});

	return (
		<Modal onClose={onClose}>
			<div className={styles.container}>
				<h1 id="dialog-name" className={styles.title}>
					Вход <span>для администратора</span>
				</h1>
				<form action={formAction} className={styles.form}>
					<TextInput
						id="email"
						type="email"
						name="email"
						width="100%"
						placeholder="Email"
						required
						defaultValue={state?.fields?.email}
					/>
					<TextInput
						id="password"
						type="password"
						name="password"
						width="100%"
						placeholder="Password"
						required
						defaultValue={state?.fields?.password}
					/>
					<MainButtonWrapper iconName="RiLoginCircleLine" pending={isPending}>
						<button type="submit">Войти</button>
					</MainButtonWrapper>
				</form>
			</div>
		</Modal>
	);
}
