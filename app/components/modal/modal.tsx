'use client';

import { useRouter } from 'next/navigation';
import { type ElementRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

export function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const dialogRef = useRef<ElementRef<'dialog'>>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	const dismissHandler = () => {
		router.back();
	};

	return createPortal(
		<dialog
			ref={dialogRef}
			className={styles.container}
			onClose={dismissHandler}
		>
			{children}
		</dialog>,
		document.getElementById('modal-root')!
	);

	return createPortal(
		<div className="modal-backdrop">
			<dialog ref={dialogRef} className="modal" onClose={dismissHandler}>
				{children}
				<button onClick={dismissHandler} className="close-button" />
			</dialog>
		</div>,
		document.getElementById('modal-root')!
	);
}
