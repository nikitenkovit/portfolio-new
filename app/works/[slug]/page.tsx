import { getWork, getWorks } from '@/app/lib/data';
import { Work } from '@prisma/client';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import WorkPage from './work';

export const dynamicParams = true;

export async function generateStaticParams() {
	const works = await getWorks();
	console.log(
		'works.map((data) => ({ slug: data.slug }))',
		works.map((data) => ({ slug: data.slug }))
	);

	return works.map((data) => ({ slug: data.slug }));
}

export default async function WorkListWithSingleWork({
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

	// TODO: Добавить скелетон!!! Очень сильно нужен! Прям видно на странице как появляется сообщение!!! Скелетон сделать в модальном окне обязательно!!!
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<WorkPage work={work} />
		</Suspense>
	);
}
