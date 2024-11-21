import { Header, Hr } from '../components';
import { Experience } from './experience';
import styles from './page.module.scss';
import { PersonalInfos } from './personal-infos';
import { Skills } from './skills';

export default function About() {
	return (
		<main className={styles.container}>
			<Header />
			<PersonalInfos />
			<Hr />
			<Skills />
			<Hr />
			<Experience />
		</main>
	);
}
