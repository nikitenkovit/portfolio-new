import { getWork, getWorks } from '@/app/lib/data';
import { Work } from '@prisma/client';
import { notFound } from 'next/navigation';
import { WorkFormModal } from '../../work-form-modal/work-form-modal';

export const dynamicParams = true;

export async function generateStaticParams() {
	const works = await getWorks();
	return works.map((data) => ({ slug: data.slug }));
}

// FIXME: Сделать обязательно защиту пути только для АДМИНА!!
export default async function WorkListWithEditableWork({
	params,
}: {
	params: Promise<Work>;
}) {
	const { slug } = await params;
	const work = await getWork(slug);

	if (!work) {
		// FIXME: Добавить страницу 404
		notFound();
	}

	return <WorkFormModal work={work} />;
}
