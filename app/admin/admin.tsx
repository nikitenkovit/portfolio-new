'use client';

import { signOut } from 'next-auth/react';
import { MainButtonWrapper } from '../components';
import { Link } from '../lib/types/links.type';
import styles from './admin.module.scss';

export const AdminContainer = () => {
	const logoutHandler = () => signOut({ callbackUrl: Link.Home });

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
