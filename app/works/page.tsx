import { Suspense } from 'react';
import { getWorks } from '../lib/data/getWorks';
import styles from './page.module.scss';
import { WorkList } from './work-list';

export default async function Works() {
	const works = await getWorks();

	// FIXME: Добавить скелетон
	return (
		<main className={styles.container}>
			<Suspense fallback={<div>Loading...</div>}>
				<WorkList items={works} />
			</Suspense>
		</main>
	);
}
