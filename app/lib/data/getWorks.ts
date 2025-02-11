import { API_URL } from '@/app/configs/api.config';
import { Work } from '@prisma/client';
import { ERROR_TEXT } from '../constants/auth';

export async function getWork(slug: string): Promise<Work> {
	const response = await fetch(`${API_URL}/work?slug=${slug}`);

	const work = await response.json();

	if (!work) {
		throw new Error(ERROR_TEXT.NOT_FOUND);
	}

	return work;
}

export async function getWorks(): Promise<Work[]> {
	const response = await fetch(`${API_URL}/works`);
	const works = await response.json();
	return works;
}
