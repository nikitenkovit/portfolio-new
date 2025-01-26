'use client';
import LoginModal from '@/app/login/login';
import classNames from 'classnames';
import { useState } from 'react';
import { MenuItem } from './menu-item';
import { loginLink, menuDataItems } from './menu.data';
import styles from './menu.module.scss';

export default function Menu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

	const menuToggleHandler = () => setIsMenuOpen(!isMenuOpen);
	const menuCloseHandler = () => setIsMenuOpen(false);
	const loginModalOpenHandler = () => {
		setIsLoginModalOpen(true);
		setIsMenuOpen(false);
	};
	const loginModalCloseHandler = () => setIsLoginModalOpen(false);

	return (
		<>
			<button
				className={classNames(styles.menuToggle, {
					[styles.opened]: isMenuOpen,
				})}
				aria-label="Открыть меню"
				onClick={menuToggleHandler}
			/>
			<ul
				aria-label="Меню навигации"
				className={classNames(styles.list, { [styles.opened]: isMenuOpen })}
			>
				{menuDataItems.map((item) => (
					<MenuItem item={item} key={item.title} onClick={menuCloseHandler} />
				))}
				<MenuItem
					item={loginLink}
					key={loginLink.title}
					onClick={loginModalOpenHandler}
					isLogin
				/>
			</ul>
			{isLoginModalOpen && <LoginModal onClose={loginModalCloseHandler} />}
		</>
	);
}
