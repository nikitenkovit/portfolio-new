import { ErrorBoundary } from '../components/error-boundary/error-boundary';
import { ContactForm } from './contact-form';
import styles from './page.module.scss';

export default async function Contact() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.titleContainer}>
					<h2 className={styles.title}>Не стесняйтесь!</h2>
					<p className={styles.subtitle}>
						Свяжитесь со мной без лишних формальностей. Мне важно ваше мнение о
						моих работах, ваши предложения или просто интересные мысли. {'\n'}
						Для защиты своей конфиденциальности я предпочитаю использовать
						Telegram-бот. Оставьте своё сообщение, и я обязательно свяжусь с
						вами.
					</p>
				</div>
				<div className={styles.formContainer}>
					<ErrorBoundary>
						<ContactForm />
					</ErrorBoundary>
				</div>
			</div>
		</main>
	);
}
