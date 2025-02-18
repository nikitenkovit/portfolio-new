import { ErrorBoundary, Modal } from '@/app/lib/components';
import { getWorks } from '@/app/lib/data/getWorks';
import { Work } from '@prisma/client';
import WorkPage from './work';

export const dynamicParams = true;

export async function generateStaticParams() {
	const works = await getWorks();
	return works.map((data) => ({ slug: data.slug }));
}

export default function WorkListWithSingleWork({
	params,
}: {
	params: Promise<Work>;
}) {
	return (
		<Modal>
			<ErrorBoundary>
				<WorkPage params={params} />
			</ErrorBoundary>
		</Modal>
	);
}
