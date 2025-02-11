'use client';
import { useAuth } from '@/app/lib/hooks/use-auth';
import { useBoolean } from '@/app/lib/hooks/use-boolean';
import classNames from 'classnames';
import { MenuItem } from './menu-item';
import { adminLink, loginLink, menuDataItems } from './menu.data';
import styles from './menu.module.scss';

export default function Menu() {
	const [isMenuOpen, setIsMenuOpen] = useBoolean(false);
	const { isAuthenticated } = useAuth();

	const menuToggleHandler = () => setIsMenuOpen.toggle();
	const menuCloseHandler = () => setIsMenuOpen.off();

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
				{isAuthenticated ? (
					<MenuItem
						item={adminLink}
						key={adminLink.title}
						onClick={menuCloseHandler}
						isAdminItem
					/>
				) : (
					<MenuItem
						item={loginLink}
						key={loginLink.title}
						onClick={menuCloseHandler}
						isAdminItem
					/>
				)}
			</ul>
		</>
	);
}
