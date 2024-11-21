import { ExperienceList } from './experience-list';
import { educationData, experienceData } from './experience.data';
import styles from './experience.module.scss';

export const Experience = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Опыт и образование</h2>
			<div className={styles.wrapper}>
				<ExperienceList experience={experienceData} />
				<ExperienceList experience={educationData} />
			</div>
		</div>
	);
};
