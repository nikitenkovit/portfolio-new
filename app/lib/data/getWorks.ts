import { Work } from '@prisma/client';
import { ERROR_TEXT } from '../constants/auth';
import { getWorksUrl, getWorkUrl } from '../utils/api';

export async function getWork(slug: string): Promise<Work> {
	const response = await fetch(getWorkUrl(slug));

	const work = await response.json();

	if (!work) {
		throw new Error(ERROR_TEXT.NOT_FOUND);
	}

	return work;
}

export async function getWorks(): Promise<Work[]> {
	const response = await fetch(getWorksUrl());
	const works = await response.json();
	return works;
}
