import { AppLink } from '@/app/lib/types';
import Link from 'next/link';

export default function NotFound() {
	// FIXME: сделать правильно https://nextjs.org/docs/app/api-reference/file-conventions/not-found
	return (
		<div style={{ backgroundColor: 'teal' }}>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href={AppLink.Works}>Return Works</Link>
		</div>
	);
}
