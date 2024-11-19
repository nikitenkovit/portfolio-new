import { TypeIconName } from '@/app/lib/types/icons.types';
import { Icon } from '../icons';
import styles from './main-button-wrapper.module.scss';

interface IProps {
	iconName: TypeIconName;
}

export const MainButtonWrapper = ({
	iconName,
	children,
}: IProps &
	Readonly<{
		children: React.ReactNode;
	}>) => {
	return (
		<div className={styles.wrapper}>
			{children}
			<span>
				<Icon name={iconName} />
			</span>
		</div>
	);
};
