import { removeWork } from '@/app/actions/work.action';
import { MainButtonWrapper, Modal } from '@/app/components';
import { ErrorBoundary } from '@/app/components/error-boundary/error-boundary';
import styles from './remove-work-modal.module.scss';

export const RemoveWorkModal = ({
	onClose,
	id,
}: {
	onClose: () => void;
	id: string;
}) => {
	const acceptHandler = () => {
		removeWork(id);
	};

	return (
		<Modal onClose={onClose}>
			<ErrorBoundary>
				<div className={styles.container}>
					<p className={styles.title}>
						Удалить <span>работу?</span>
					</p>
					<div className={styles.buttonContainer}>
						<MainButtonWrapper iconName="FaRegCheckCircle">
							<button onClick={acceptHandler}>Да</button>
						</MainButtonWrapper>
						<MainButtonWrapper iconName="MdDoNotDisturb" color="red">
							<button onClick={onClose}>Нет</button>
						</MainButtonWrapper>
					</div>
				</div>
			</ErrorBoundary>
		</Modal>
	);
};
