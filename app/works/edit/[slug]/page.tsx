import { getWork, getWorks } from '@/app/lib/data';
import { Work } from '@prisma/client';
import { WorkFormModal } from '../../work-form-modal/work-form-modal';

export const dynamicParams = true;

export async function generateStaticParams() {
	const works = await getWorks();
	return works.map((data) => ({ slug: data.slug }));
}

export default async function WorkListWithEditableWork({
	params,
}: {
	params: Promise<Work>;
}) {
	const { slug } = await params;
	const work = await getWork(slug);

	return <WorkFormModal work={work} />;
}
