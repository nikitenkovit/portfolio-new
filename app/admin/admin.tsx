'use client';

import { signOut } from 'next-auth/react';
import { MainButtonWrapper } from '../lib/components';
import { AppLink } from '../lib/types';
import styles from './admin.module.scss';

export const AdminContainer = () => {
	const logoutHandler = () => signOut({ callbackUrl: AppLink.Home });

	return (
		<div className={styles.container}>
			<MainButtonWrapper iconName="LiaSignOutAltSolid">
				<button type="button" onClick={logoutHandler}>
					Выйти
				</button>
			</MainButtonWrapper>
		</div>
	);
};
