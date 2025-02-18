'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { MainButtonWrapper } from '../components';
import { AppLink } from '../lib/types';
import styles from './provider-buttons.module.scss';

const Buttons = () => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl') || AppLink.Admin;

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
};

export function ProviderButtons() {
	return (
		// FIXME: Добавить прелоадер в саспенс
		<Suspense fallback={<div>Загрузка</div>}>
			<Buttons />
		</Suspense>
	);
}
