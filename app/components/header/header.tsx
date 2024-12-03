'use client';
import { Link } from '@/app/lib/types/links.type';
import { getSegment } from '@/app/lib/utils';
import { usePathname } from 'next/navigation';
import { headerData } from './header.data';
import styles from './header.module.scss';

export const Header = () => {
	const pathname = getSegment(usePathname()) as Link;
	const data = headerData[pathname] || {};
	const { titlePart, titlePartColor, subtitle } = data;

	if (!Object.keys(data).length) {
		return null;
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				{titlePart} <span className={styles.color}>{titlePartColor}</span>
			</h1>
			<span className={styles.subtitle}>{subtitle}</span>
		</div>
	);
};
