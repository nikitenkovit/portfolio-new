'use client';

import { ErrorBoundary, Modal } from '@/app/lib/components';
import { Work } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { WorkForm } from './work-form';
import styles from './work-form-modal.module.scss';

interface IPops {
	onClose?: () => void;
	work?: Work;
}

export const WorkFormModal = ({ onClose, work }: IPops) => {
	const router = useRouter();

	const closeHandler = () => {
		onClose ? onClose() : router.push(`/works/${work?.slug}`);
	};

	return (
		<Modal onClose={closeHandler}>
			<ErrorBoundary>
				<div className={styles.container}>
					{work ? (
						<h2 className={styles.title}>
							Редактирование <span>работы</span>
						</h2>
					) : (
						<h2 className={styles.title}>
							Добавление <span>новой работы</span>
						</h2>
					)}
					<WorkForm work={work} />
				</div>
			</ErrorBoundary>
		</Modal>
	);
};
