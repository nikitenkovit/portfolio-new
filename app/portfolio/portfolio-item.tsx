import Image from 'next/image';
import Link from 'next/link';
import { Work } from '../lib/types/portfolio.type';
import styles from './portfolio-item.module.scss';

interface IProps {
	item: Work;
}

export const PortfolioItem = ({ item }: IProps) => {
	return (
		<li className={styles.container}>
			<Link href={`/portfolio/works/${item.slug}`} className={styles.link}>
				<figure className={styles.item}>
					<Image
						src={item.image}
						fill
						alt={`Изображение работы ${item.title}`}
						className={styles.image}
						quality={75}
					/>
					<figcaption>Слон на фоне заката</figcaption>
				</figure>
			</Link>
		</li>
	);
};
