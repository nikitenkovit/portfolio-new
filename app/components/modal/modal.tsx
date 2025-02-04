'use client';

import { useClient } from '@/app/lib/hooks/use-client';
import { useNavigation } from '@/app/lib/hooks/use-navigation';
import { type ElementRef, MouseEvent, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

export function Modal({
	onClose,
	children,
}: {
	children: React.ReactNode;
	onClose?: () => void;
}) {
	const dialogRef = useRef<ElementRef<'dialog'>>(null);
	const ref = useRef<Element | null>(null);
	const { isMounted } = useClient();
	const { goBack } = useNavigation();
	const closeHandler = onClose ? onClose : goBack;

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>('.modal-root');

		if (isMounted && !dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, [ref.current]);

	function closeOnBackDropClick({
		currentTarget,
		target,
	}: MouseEvent<HTMLDialogElement>) {
		const dialogElement = currentTarget;
		const isClickedOnBackDrop = target === dialogElement;

		if (isClickedOnBackDrop) {
			closeHandler();
		}
	}

	return isMounted && ref.current
		? createPortal(
				<dialog
					ref={dialogRef}
					className={styles.modal}
					onClose={closeHandler}
					onClick={closeOnBackDropClick}
					aria-labelledby="dialog-name"
				>
					<div className={styles.container}>
						<div className={styles.buttonContainer}>
							<button
								type="button"
								className={styles.button}
								aria-label="Закрыть модальное окно"
								onClick={closeHandler}
							/>
						</div>
						{children}
					</div>
				</dialog>,
				ref.current
		  )
		: null;
}
