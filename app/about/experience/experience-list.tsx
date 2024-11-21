import { Icon } from '@/app/components';
import styles from './experience-list.module.scss';
import { Experience } from './experience.type';

interface IProps {
	experience: Experience[];
}

export const ExperienceList = ({ experience }: IProps) => {
	return (
		<ul>
			{experience.map((item) => {
				return (
					<li className={styles.item}>
						<div className={styles.icon}>
							<Icon name={item.icon} />
						</div>
						<span className={styles.date}>{item.date}</span>
						<h3 className={styles.title}>
							{item.title}{' '}
							{item.company && (
								<span className={styles.company}>{item.company}</span>
							)}
						</h3>
						<p className={styles.description}>{item.description}</p>
					</li>
				);
			})}
		</ul>
	);
};
