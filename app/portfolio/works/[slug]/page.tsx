import { Work } from '@/app/lib/types/portfolio.type';
import { portfolioData } from '../../portfolio.data';

export const dynamicParams = false;

export function generateStaticParams() {
	return portfolioData;
}

export default async function WorkPage({ params }: { params: Promise<Work> }) {
	const slug = (await params).slug;
	return <div className="card">{slug}</div>;
}
