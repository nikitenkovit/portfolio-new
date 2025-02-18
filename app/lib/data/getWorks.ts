import { Work } from '@prisma/client';
import { ERROR_TEXT } from '../constants';
import { getWorksUrl, getWorkUrl } from '../utils';

export async function getWork(slug: string): Promise<Work> {
	// вызывается в серверном компоненте. не требует useQuery
	const response = await fetch(getWorkUrl(slug));

	const work = await response.json();

	if (!work) {
		throw new Error(ERROR_TEXT.NOT_FOUND);
	}

	return work;
}

export async function getWorks(): Promise<Work[]> {
	// вызывается в серверном компоненте. не требует useQuery
	const response = await fetch(getWorksUrl());
	const works = await response.json();
	return works;
}
