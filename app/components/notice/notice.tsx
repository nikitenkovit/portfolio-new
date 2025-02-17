import { NotificationStatus } from '@/app/lib/types/notification-status.type';
import classNames from 'classnames';
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
