'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Work } from '../lib/types/portfolio.type';
import styles from './portfolio-item.module.scss';

interface IProps {
	item: Work;
}

export const PortfolioItem = ({ item }: IProps) => {
	const slashMotion = {
		rest: {
			y: '-100%',
			transition: {
				duration: 0.3,
			},
		},
		hover: {
			y: '0',
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<li className={styles.container}>
			<Link href={`/portfolio/works/${item.slug}`} className={styles.link}>
				<motion.figure
					className={styles.item}
					initial="rest"
					whileHover="hover"
					animate="rest"
				>
					<Image
						src={item.image}
						fill
						alt={`Изображение работы ${item.title}`}
						className={styles.image}
						quality={75}
					/>
					<motion.figcaption className={styles.caption} variants={slashMotion}>
						{item.title}
						<div className={styles.technologies}>
							{item.technologies?.map((technology) => (
								<span key={`${item.title}-${technology}`}>{technology}</span>
							))}
						</div>
					</motion.figcaption>
				</motion.figure>
			</Link>
		</li>
	);
};
