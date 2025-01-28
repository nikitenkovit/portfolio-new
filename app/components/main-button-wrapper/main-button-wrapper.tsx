import { TypeIconName } from '@/app/lib/types/icons.types';
import classNames from 'classnames';
import { Icon } from '../icons';
import styles from './main-button-wrapper.module.scss';

interface IProps {
	iconName: TypeIconName;
	disabled?: boolean;
	pending?: boolean;
}

export const MainButtonWrapper = ({
	iconName,
	disabled,
	pending,
	children,
}: IProps &
	Readonly<{
		children: React.ReactNode;
	}>) => {
	return (
		<div
			className={classNames(styles.wrapper, {
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
