'use client';

import { MainButtonWrapper } from '@/app/lib/components';
import { useAuth, useBoolean } from '@/app/lib/hooks';
import { Work } from '@prisma/client';
import Link from 'next/link';
import { RemoveWorkModal } from './remove-work-modal';
import styles from './work-actions.module.scss';

export const WorkActions = ({ work }: { work: Work }) => {
	const { isAuthenticated } = useAuth();
	const [isRemoveModalOpen, setIsRemoveModalOpen] = useBoolean(false);

	if (!isAuthenticated) {
		return null;
	}

	const openModalHandler = () => setIsRemoveModalOpen.on();
	const closeModalHandler = () => setIsRemoveModalOpen.off();

	return (
		<div className={styles.container}>
			{isRemoveModalOpen && (
				<RemoveWorkModal onClose={closeModalHandler} workId={work.id} />
			)}
			<MainButtonWrapper iconName="GrEdit">
				<Link href={`/works/edit/${work.slug}`}>Изменить</Link>
			</MainButtonWrapper>
			<MainButtonWrapper iconName="IoIosRemoveCircleOutline" color="red">
				<button onClick={openModalHandler}>Удалить</button>
			</MainButtonWrapper>
		</div>
	);
};
