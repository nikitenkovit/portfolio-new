'use client';
import { Work } from '@prisma/client';
import { useState } from 'react';
import { useAuth } from '../lib/hooks/use-auth';
import { CreateWorkModal } from './admin/create-work/create-work-modal';
import styles from './page.module.scss';
import { addNewWorkData } from './portfolio.data';
import { WorkItem } from './work-item';

interface IProps {
	items: Work[];
}

export const WorkList = ({ items }: IProps) => {
	const { isAuthenticated } = useAuth();
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const createModalOpenHandler = () => setIsCreateModalOpen(true);
	const createModalCloseHandler = () => setIsCreateModalOpen(false);

	return (
		<>
			<ul className={styles.list}>
				{isAuthenticated && (
					<WorkItem
						item={addNewWorkData}
						key={addNewWorkData.title}
						isItemCreate={isAuthenticated}
						onClick={createModalOpenHandler}
					/>
				)}
				{items?.map((item) => {
					return <WorkItem item={item} key={item.slug} />;
				})}
			</ul>
			{isCreateModalOpen && (
				<CreateWorkModal onClose={createModalCloseHandler} />
			)}
		</>
	);
};
