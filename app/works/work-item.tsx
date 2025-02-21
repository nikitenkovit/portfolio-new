'use client';

import { Work } from '@prisma/client';
import classNames from 'classnames';
// FIXME: Переписать анимацию на нативную и удалить библиотеку framer-motion!!!
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getWorkPath } from '../lib/utils';
import styles from './work-item.module.scss';

interface IProps {
	item: Work;
	onClick?: () => void;
	isItemCreate?: boolean;
}

export const WorkItem = ({ item, isItemCreate, onClick }: IProps) => {
	const router = useRouter();

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

	const itemClickHandler = () => {
		if (onClick) {
			return onClick();
		}

		router.push(getWorkPath(item.slug));
	};

	return (
		<li
			className={classNames(styles.item, {
				[styles.createItem]: isItemCreate,
			})}
			onClick={itemClickHandler}
		>
			<motion.figure
				className={styles.container}
				initial="rest"
				whileHover="hover"
				animate="rest"
			>
				{isItemCreate && <span className={styles.createText}>+</span>}{' '}
				{!isItemCreate && item.image && (
					<Image
						src={item.image}
						fill
						alt={`Изображение работы ${item.title}`}
						className={styles.image}
						quality={75}
					/>
				)}
				<motion.figcaption className={styles.caption} variants={slashMotion}>
					{item.title}
					<div className={styles.technologies}>
						{item.technologies?.split(',').map((technology, index) => (
							<span key={`${item.title}-${technology}-${index}`}>
								{technology}
							</span>
						))}
					</div>
				</motion.figcaption>
			</motion.figure>
		</li>
	);
};
