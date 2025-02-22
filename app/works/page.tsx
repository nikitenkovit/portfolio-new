import { Suspense } from 'react';
import { getWorks } from '../lib/data';
import Loading from './loading';
import styles from './page.module.scss';
import { WorkList } from './work-list';

export default async function Works() {
	const works = await getWorks();

	return (
		<main className={styles.container}>
			<Suspense fallback={<Loading />}>
				<WorkList items={works} />
			</Suspense>
		</main>
	);
}
