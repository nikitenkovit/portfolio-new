import { MainButtonWrapper, Modal, TextInput } from '../components';
import styles from './login.module.scss';

export default function LoginModal({ onClose }: { onClose: () => void }) {
	return (
		<Modal onClose={onClose}>
			<div className={styles.container}>
				<h1 id="dialog-name" className={styles.title}>
					Вход <span>для администратора</span>
				</h1>
				<form action="" className={styles.form}>
					<TextInput type="email" width="100%" placeholder="Email" required />
					<TextInput
						type="password"
						width="100%"
						placeholder="Password"
						required
					/>
					<MainButtonWrapper iconName="RiLoginCircleLine">
						<button type="submit">Войти</button>
					</MainButtonWrapper>
				</form>
			</div>
		</Modal>
	);
}
