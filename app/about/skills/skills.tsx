import { SkillsList } from './skills-list';
import styles from './skills.module.scss';

export const Skills = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Стек технологий</h2>
			<SkillsList />
		</div>
	);
};
