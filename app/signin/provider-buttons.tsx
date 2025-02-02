'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { MainButtonWrapper } from '../components';
import { Link } from '../lib/types/links.type';
import styles from './provider-buttons.module.scss';

export function ProviderButtons() {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl') || Link.Admin;

	// FIXME: сделать вывод об ошибке
	return (
		<div className={styles.container}>
			<MainButtonWrapper iconName="RiLoginCircleLine">
				<button type="button" onClick={() => signIn('google', { callbackUrl })}>
					Google
				</button>
			</MainButtonWrapper>
			<MainButtonWrapper iconName="RiLoginCircleLine">
				<button type="button" onClick={() => signIn('github', { callbackUrl })}>
					GITHUB
				</button>
			</MainButtonWrapper>
		</div>
	);
}
