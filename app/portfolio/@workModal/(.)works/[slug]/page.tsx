import { Modal } from '@/app/components';
import { Work } from '@/app/lib/types/portfolio.type';
import WorkPage from '@/app/portfolio/works/[slug]/page';

export default async function PhotoModal({
	params,
}: {
	params: Promise<Work>;
}) {
	return (
		<Modal>
			<WorkPage params={params} />
		</Modal>
	);
}
