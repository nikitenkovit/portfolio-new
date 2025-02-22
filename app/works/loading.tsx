import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import uuid from 'react-uuid';
import styles from './page.module.scss';

export default function Loading() {
	return (
		<div className={styles.container}>
			<div className={styles.list}>
				{...new Array(6)
					.fill(6)
					.map(() => (
						<Skeleton
							key={uuid()}
							className={styles.itemSkeleton}
							baseColor="#2b2a2a"
							highlightColor="#808080"
						/>
					))}
			</div>
		</div>
	);
}
