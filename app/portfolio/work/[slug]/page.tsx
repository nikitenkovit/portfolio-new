import { Work } from '@/app/lib/types/portfolio.type';
import { portfolioData } from '../../portfolio.data';
import styles from './page.module.scss';

export const dynamicParams = false;

export function generateStaticParams() {
	return portfolioData.map((data) => ({ slug: data.slug }));
}

export default async function WorkPage({ params }: { params: Promise<Work> }) {
	const { slug } = await params;
	const work = portfolioData.find((data) => data.slug === slug);
	console.log({ slug, work });

	return <div className={styles.container}>{slug}</div>;
}
