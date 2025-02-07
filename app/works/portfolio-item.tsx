'use client';

import { Work } from '@prisma/client';
import classNames from 'classnames';
// FIXME: Переписать анимацию на нативную и удалить библиотеку framer-motion!!!
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './portfolio-item.module.scss';

interface IProps {
	item: Work;
	addNew?: boolean;
	onClick?: () => void;
}

export const PortfolioItem = ({ item, addNew, onClick }: IProps) => {
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
		<li className={classNames(styles.container, { [styles.addNew]: addNew })}>
			<Link
				href={`/works/${item.slug}`}
				className={styles.link}
				onClick={onClick}
			>
				<motion.figure
					className={styles.item}
					initial="rest"
					whileHover="hover"
					animate="rest"
				>
					{item.image ? (
						<Image
							src={item.image}
							fill
							alt={`Изображение работы ${item.title}`}
							className={styles.image}
							quality={75}
						/>
					) : (
						<span className={styles.addText}>+</span>
					)}
					<motion.figcaption className={styles.caption} variants={slashMotion}>
						{item.title}
						<div className={styles.technologies}>
							{item.technologies?.split(',').map((technology) => (
								<span key={`${item.title}-${technology}`}>{technology}</span>
							))}
						</div>
					</motion.figcaption>
				</motion.figure>
			</Link>
		</li>
	);
};
