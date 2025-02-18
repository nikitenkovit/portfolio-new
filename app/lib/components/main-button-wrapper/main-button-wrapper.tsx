import classNames from 'classnames';
import type { TypeIconName } from '../../types';
import { Icon } from '../icons';
import styles from './main-button-wrapper.module.scss';

interface IProps {
	iconName: TypeIconName;
	disabled?: boolean;
	pending?: boolean;
	color?: 'red' | 'green';
}

export const MainButtonWrapper = ({
	iconName,
	disabled,
	pending,
	color = 'green',
	children,
}: IProps &
	Readonly<{
		children: React.ReactNode;
	}>) => {
	return (
		<div
			className={classNames(styles.wrapper, styles[color], {
				[styles.disabled]: disabled,
				[styles.pending]: pending,
			})}
		>
			<div className={styles.link}>{children}</div>
			<span>
				<Icon name={pending ? 'TbFidgetSpinner' : iconName} />
			</span>
		</div>
	);
};
