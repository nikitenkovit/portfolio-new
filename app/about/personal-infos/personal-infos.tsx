'use client';
import { MainButtonWrapper } from '@/app/lib/components';
import { saveAs } from 'file-saver';
import Image from 'next/image';
import { personalInfos } from './personal-infos.data';
import styles from './personal-infos.module.scss';

export const PersonalInfos = () => {
	const clickHandler = () => {
		saveAs('/test.txt', 'myDocument.txt');
	};
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Личная информация</h2>
			<div className={styles.photo}>
				<Image
					src="/myPhoto.jpg"
					sizes="(max-width: 576px) 230px"
					fill
					alt="Моя фотография"
					className={styles.image}
					quality={75}
				/>
			</div>
			<dl className={styles.list}>
				{personalInfos.map(({ dt, dd }) => {
					return (
						<div key={dt} className={styles.item}>
							<dt className={styles.dt}>{dt}</dt>
							<dd className={styles.dd}>{dd}</dd>
						</div>
					);
				})}
			</dl>
			<MainButtonWrapper iconName="FaDownload">
				<button onClick={clickHandler}>Резюме</button>
			</MainButtonWrapper>
		</div>
	);
};
