import { Work } from '@prisma/client';
import Works from '../page';
import { portfolioData } from '../portfolio.data';
import WorkPage from './work';

export const dynamicParams = false;

export function generateStaticParams() {
	return portfolioData.map((data) => ({ slug: data.slug }));
}

export default function SlugWorks({ params }: { params: Promise<Work> }) {
	return (
		<div>
			<WorkPage params={params} />
			<Works />
		</div>
	);
}
