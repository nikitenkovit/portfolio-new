'use client';

import { IMenuItem } from '@/app/lib/types/menu.types';
import { getSegment } from '@/app/lib/utils/common';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '../icons/icon-component';
import styles from './menu-item.module.scss';

interface IProps {
	item: IMenuItem;
	onClick: () => void;
	isAdminItem?: boolean;
}

export const MenuItem = ({ item, onClick, isAdminItem }: IProps) => {
	const pathname = getSegment(usePathname());
	const isActive = pathname === item.link;

	return (
		<li className={classNames(styles.item, { [styles.admin]: isAdminItem })}>
			<Link
				href={item.link}
				className={classNames(styles.link, {
					[styles.active]: isActive,
				})}
				onClick={onClick}
			>
				<Icon name={item.icon} />
				<span className={styles.title}>{item.title}</span>
			</Link>
		</li>
	);
};
