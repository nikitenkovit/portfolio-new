'use client';
import { CSSProperties } from 'react';
import { useTimeout } from '../../hooks';
import type { TypeIconName } from '../../types';
import { NotificationStatus } from '../../types';
import { MainButtonWrapper } from '../main-button-wrapper';
import { Notice } from '../notice';
import styles from './main-form.module.scss';

interface IProps {
	formAction:
		| string
		| ((formData: FormData) => void | Promise<void>)
		| undefined;
	children: React.ReactNode;
	notice?: string | null;
	noticeVariant?: NotificationStatus;
	isPending?: boolean;
	iconName: TypeIconName;
	buttonName: string;
	style?: CSSProperties | undefined;
}

export const MainForm = ({
	formAction,
	notice,
	noticeVariant = NotificationStatus.Error,
	isPending,
	iconName,
	buttonName,
	style = {},
	children,
}: IProps) => {
	const isTimeAvailable = useTimeout(notice);
	const isNoticeAvailable =
		noticeVariant === NotificationStatus.Error || isTimeAvailable;

	return (
		<form action={formAction} className={styles.form} style={{ ...style }}>
			{children}
			{isNoticeAvailable && (
				<Notice notice={notice} noticeVariant={noticeVariant} />
			)}
			<MainButtonWrapper iconName={iconName} pending={isPending}>
				<button type="submit">{buttonName}</button>
			</MainButtonWrapper>
		</form>
	);
};
