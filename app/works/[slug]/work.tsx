import { Icon, Modal } from '@/app/components';
import { Work } from '@/app/lib/types/portfolio.type';
import Image from 'next/image';
import { portfolioData } from '../portfolio.data';
import styles from './work.module.scss';

export const dynamicParams = false;

export function generateStaticParams() {
	return portfolioData.map((data) => ({ slug: data.slug }));
}

export default async function WorkPage({ params }: { params: Promise<Work> }) {
	const { slug } = await params;
	const work = portfolioData.find((data) => data.slug === slug);

	return (
		<Modal>
			<div className={styles.infoContainer}>
				<h1 id="dialog-name" className={styles.title}>
					{work?.title}
				</h1>

				{work?.image && (
					<div className={styles.imageContainer}>
						<Image
							src={work?.image}
							fill
							alt={`Изображение работы ${work.title}`}
							className={styles.image}
							quality={75}
						/>
					</div>
				)}

				<dl className={styles.infoList}>
					<div className={styles.infoItem}>
						<dt className={styles.infoTerm}>
							<Icon name="BsCalendarDate" />
							Год :&nbsp;
						</dt>
						<dd className={styles.infoDefinition}>{work?.year}</dd>
					</div>

					<div className={styles.infoItem}>
						<dt className={styles.infoTerm}>
							<Icon name="FaCode" />
							Технологии :&nbsp;
						</dt>
						<dd className={styles.infoDefinition}>{work?.technologies}</dd>
					</div>

					{work?.githubLink && (
						<div className={styles.infoItem}>
							<dt className={styles.infoTerm}>
								<Icon name="FaGithub" />
								GitHub :&nbsp;
							</dt>
							<dd className={styles.infoDefinition}>
								<a href={work.githubLink} target="blank">
									nikitenkovit
								</a>
							</dd>
						</div>
					)}

					{work?.link && (
						<div className={styles.infoItem}>
							<dt className={styles.infoTerm}>
								<Icon name="FaExternalLinkAlt" />
								Просмотр :&nbsp;
							</dt>
							<dd className={styles.infoDefinition}>
								<a href={work.link} target="blank">
									{work.title}
								</a>
							</dd>
						</div>
					)}
				</dl>

				<p className={styles.description}>{work?.description}</p>
			</div>
		</Modal>
	);
}
