import styles from './page.module.scss';
import { PortfolioItem } from './portfolio-item';
import { portfolioData } from './portfolio.data';

export default function About() {
	return (
		<main className={styles.container}>
			<ul className={styles.list}>
				{portfolioData.map((item) => {
					return <PortfolioItem item={item} key={item.slug} />;
				})}
			</ul>
		</main>
	);
}
