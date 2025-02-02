import { SignInForm } from './form';
import styles from './page.module.scss';
import { ProviderButtons } from './provider-buttons';

export default function SignIn() {
	return (
		<main className={styles.main}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Войти с помощью:</h2>
				<ProviderButtons />
				<h2 className={styles.title}>Или:</h2>
				<SignInForm />
			</div>
		</main>
	);
}
