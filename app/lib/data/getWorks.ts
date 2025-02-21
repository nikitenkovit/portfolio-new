import { Work } from '@prisma/client';
import { getWorksUrl, getWorkUrl } from '../utils';

export async function getWork(slug: string): Promise<Work | null> {
	const response = await fetch(getWorkUrl(slug));

	const work = await response.json();

	return work;
}

export async function getWorks(): Promise<Work[]> {
	// вызывается в серверном компоненте. не требует useQuery
	const response = await fetch(getWorksUrl());
	const works = await response.json();
	return works;
}
