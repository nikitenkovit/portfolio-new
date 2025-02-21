import { ErrorBoundary, Icon, Modal } from '@/app/lib/components';
import { Work } from '@prisma/client';
import Image from 'next/image';
import { WorkActions } from './work-actions/work-actions';
import styles from './work.module.scss';

export default function WorkPage({ work }: { work: Work }) {
	// FIXME: Добавить в Suspense скелетон И НЕОБХОДИМЫЕ ШИРИНЫ ДЛЯ ЕГО ОТОБРАЖЕНИЯ!!!!

	if (!work) {
		// FIXME: Добавить страницу 404 и убрать
		// return null;
	}

	return (
		<Modal>
			<ErrorBoundary>
				<div className={styles.infoContainer}>
					<h1 id="dialog-name" className={styles.title}>
						{work?.title}
					</h1>

					<div className={styles.imageContainer}>
						{work?.image && (
							<Image
								src={work?.image}
								fill
								alt={`Изображение работы ${work.title}`}
								className={styles.image}
								quality={75}
							/>
						)}
					</div>

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

					<WorkActions work={work} />
				</div>
			</ErrorBoundary>
		</Modal>
	);
}
