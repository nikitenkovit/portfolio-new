import { Modal } from '@/app/components';
import { CreateWorkForm } from './create-work-form';
import styles from './create-work-modal.module.scss';
interface IPops {
	onClose: () => void;
}

export const CreateWorkModal = ({ onClose }: IPops) => {
	return (
		<Modal onClose={onClose}>
			<div className={styles.container}>
				<h2 className={styles.title}>
					Добавление <span>новой работы</span>
				</h2>
				<CreateWorkForm />
			</div>
		</Modal>
	);
};
