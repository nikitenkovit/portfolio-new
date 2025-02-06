import styles from './page.module.scss';
import { portfolioData } from './portfolio.data';
import { WorkList } from './work-list';

export default function Works() {
	return (
		<main className={styles.container}>
			<WorkList items={portfolioData} />
		</main>
	);
}
