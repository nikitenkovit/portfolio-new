'use client';
import { Work } from '@prisma/client';
import { useAuth, useBoolean } from '../lib/hooks';
import styles from './page.module.scss';
import { addNewWorkData } from './portfolio.data';
import { WorkFormModal } from './work-form-modal/work-form-modal';
import { WorkItem } from './work-item';

interface IProps {
	items: Work[];
}

export const WorkList = ({ items }: IProps) => {
	const { isAuthenticated } = useAuth();
	const [isCreateModalOpen, setIsCreateModalOpen] = useBoolean(false);
	const createModalOpenHandler = () => setIsCreateModalOpen.on();
	const createModalCloseHandler = () => setIsCreateModalOpen.off();

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
				{items.length &&
					items.map((item) => {
						return <WorkItem item={item} key={item.slug} />;
					})}
			</ul>
			{isCreateModalOpen && <WorkFormModal onClose={createModalCloseHandler} />}
		</>
	);
};
