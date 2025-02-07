'use client';
import { Work } from '@prisma/client';
import { useState } from 'react';
import { useAuth } from '../lib/hooks/use-auth';
import { CreateWorkModal } from './admin/create-work/create-work-modal';
import styles from './page.module.scss';
import { PortfolioItem } from './portfolio-item';
import { addNewWorkData } from './portfolio.data';

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
					<PortfolioItem
						item={addNewWorkData}
						key={addNewWorkData.title}
						addNew={isAuthenticated}
						onClick={createModalOpenHandler}
					/>
				)}
				{items.map((item) => {
					return <PortfolioItem item={item} key={item.slug} />;
				})}
			</ul>
			{isCreateModalOpen && (
				<CreateWorkModal onClose={createModalCloseHandler} />
			)}
		</>
	);
};
