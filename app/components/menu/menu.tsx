'use client';
import classNames from 'classnames';
import { useState } from 'react';
import { MenuItem } from './menu-item';
import { menuDataItems } from './menu.data';
import styles from './menu.module.scss';

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<button
				className={classNames(styles.menuToggle, { [styles.opened]: isOpen })}
				aria-label="Открыть меню"
				onClick={toggleHandler}
			/>
			<ul className={classNames(styles.list, { [styles.opened]: isOpen })}>
				{menuDataItems.map((item) => (
					<MenuItem item={item} key={item.title} onClick={toggleHandler} />
				))}
			</ul>
		</>
	);
}
