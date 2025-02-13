'use client';
import { useTimeout } from '@/app/lib/hooks/use-timeout';
import { TypeIconName } from '@/app/lib/types/icons.types';
import classNames from 'classnames';
import { CSSProperties } from 'react';
import { MainButtonWrapper } from '../main-button-wrapper';
import styles from './main-form.module.scss';

interface IProps {
	formAction:
		| string
		| ((formData: FormData) => void | Promise<void>)
		| undefined;
	children: React.ReactNode;
	notice?: string | null;
	noticeVariant?: 'success' | 'error';
	isPending?: boolean;
	iconName: TypeIconName;
	buttonName: string;
	style?: CSSProperties | undefined;
}

export const MainForm = ({
	formAction,
	notice,
	noticeVariant = 'error',
	isPending,
	iconName,
	buttonName,
	style = {},
	children,
}: IProps) => {
	const isNoticeActive = useTimeout(notice);

	return (
		<form action={formAction} className={styles.form} style={{ ...style }}>
			{children}
			{notice && (isNoticeActive || noticeVariant === 'error') && (
				<div className={classNames(styles.notice, styles[noticeVariant])}>
					{notice}
				</div>
			)}
			<MainButtonWrapper iconName={iconName} pending={isPending}>
				<button type="submit">{buttonName}</button>
			</MainButtonWrapper>
		</form>
	);
};
