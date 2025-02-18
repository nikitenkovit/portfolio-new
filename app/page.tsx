import Image from 'next/image';
import Link from 'next/link';
import { MainButtonWrapper } from './lib/components';
import styles from './page.module.scss';

export default function Home() {
	// TODO: Подумать над круглой фотографией на версии для планшета. Сделать квадратной?
	return (
		<main className={styles.main}>
			<div className={styles.wrapper}>
				<div className={styles.photo}>
					<Image
						src="/myPhoto.jpg"
						sizes="(max-width: 991px) 270px"
						fill
						alt="Моя фотография"
						className={styles.image}
						quality={75}
					/>
				</div>
				<div className={styles.info}>
					<h1 className={styles.greeting}>Всем привет!</h1>
					<h2 className={styles.title}>
						Я Виталий <span className={styles.lastName}>Никитенко</span>
						<span className={styles.profession}>Web developer</span>
					</h2>
					<p className={styles.description}>
						Я программирую красивые вещи, и мне нравится то, что я делаю. Считаю
						свою работу непрерывным образованием и всегда стремлюсь к
						совершенствованию своих навыков.
					</p>
					<MainButtonWrapper iconName="FaArrowRight">
						<Link href="/about">Обо мне</Link>
					</MainButtonWrapper>
				</div>
			</div>
		</main>
	);
}
