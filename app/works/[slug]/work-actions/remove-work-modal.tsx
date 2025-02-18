import { MainButtonWrapper, Modal } from '@/app/components';
import { ErrorBoundary } from '@/app/components/error-boundary/error-boundary';
import { removeWork } from '@/app/lib/actions';
import { AppLink } from '@/app/lib/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './remove-work-modal.module.scss';

export const RemoveWorkModal = ({
	onClose,
	id,
}: {
	onClose: () => void;
	id: string;
}) => {
	const router = useRouter();
	const [error, setError] = useState<string | undefined>();

	const acceptHandler = async () => {
		const error = await removeWork(id);

		if (error) {
			setError(error);
		} else {
			onClose();
		}
	};

	useEffect(() => {
		return () => {
			if (error) {
				router.push(AppLink.Works);
			}
		};
	}, [error]);

	return (
		<Modal onClose={onClose}>
			<ErrorBoundary>
				<div className={styles.container}>
					{!error ? (
						<>
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
						</>
					) : (
						<p className={styles.error}>{error}</p>
					)}
				</div>
			</ErrorBoundary>
		</Modal>
	);
};
