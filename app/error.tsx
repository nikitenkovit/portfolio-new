'use client';

import styles from './error.module.scss';
import { MainButtonWrapper } from './lib/components';

export default function Error({
	error,
	reset,
}: {
	error?: Error & { digest?: string };
	reset?: () => void;
}) {
	// TODO: Добавить логирование ошибок
	return (
		<div className={styles.container}>
			<h2>Что-то пошло не так 😢</h2>
			<h3>{error?.message}</h3>
			<MainButtonWrapper iconName="FaArrowRight">
				<button onClick={() => (reset ? reset() : undefined)}>Повторить</button>
			</MainButtonWrapper>
		</div>
	);
}
