'use client';

import { MainButtonWrapper } from '@/app/components';
import { useAuth } from '@/app/lib/hooks/use-auth';
import Link from 'next/link';
import styles from './work-actions.module.scss';

export const WorkActions = ({ slug }: { slug: string }) => {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return null;
	}

	return (
		<div className={styles.container}>
			<MainButtonWrapper iconName="GrEdit">
				<Link href={`/works/edit/${slug}`}>Изменить</Link>
			</MainButtonWrapper>
			<MainButtonWrapper iconName="IoIosRemoveCircleOutline" color="red">
				<button>Удалить</button>
			</MainButtonWrapper>
		</div>
	);
};
