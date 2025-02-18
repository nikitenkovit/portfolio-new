import classNames from 'classnames';
import type { NotificationStatus } from '../../types';
import styles from './notice.module.scss';

interface IProps {
	notice?: string | null;
	noticeVariant: NotificationStatus;
}

export const Notice = ({ notice, noticeVariant }: IProps) => {
	if (!notice) {
		return null;
	}

	return (
		<div className={classNames(styles.notice, styles[noticeVariant])}>
			{notice}
		</div>
	);
};
