import { Modal } from '@/app/components';
import { ErrorBoundary } from '@/app/components/error-boundary/error-boundary';
import { getWorks } from '@/app/lib/data/getWorks';
import { Work } from '@prisma/client';
import Works from '../page';
import WorkPage from './work';

export const dynamicParams = true;

export async function generateStaticParams() {
	const works = await getWorks();
	return works.map((data) => ({ slug: data.slug }));
}

export default function WorkListWithSingleJob({
	params,
}: {
	params: Promise<Work>;
}) {
	return (
		<div>
			<Modal>
				<ErrorBoundary>
					<WorkPage params={params} />
				</ErrorBoundary>
			</Modal>
			<Works />
		</div>
	);
}
