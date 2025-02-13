import { ContactForm } from './contact-form';
import styles from './page.module.scss';

export default function About() {
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
					<ContactForm />
				</div>
			</div>
		</main>
	);
}
