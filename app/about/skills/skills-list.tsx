import { Icon } from '@/app/components';
import styles from './skills-list.module.scss';
import { skills } from './skills.data';

export const SkillsList = () => {
	return (
		<dl className={styles.list}>
			{skills.map(({ name, icon }) => {
				return (
					<div key={name} className={styles.item}>
						<dt className={styles.icon}>
							<Icon name={icon} />
						</dt>
						<dd className={styles.name}>{name}</dd>
					</div>
				);
			})}
		</dl>
	);
};
