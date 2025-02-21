import { unstable_cache } from 'next/cache';
import { TAGS } from '../constants';
import { WorkService } from '../services';

export const getWorks = unstable_cache(
	async () => {
		return await WorkService.getMany();
	},
	[TAGS.works],
	{ tags: [TAGS.works] }
);

export const getWork = unstable_cache(
	async (slug: string) => {
		return await WorkService.getBySlug(slug);
	},
	[TAGS.work],
	{ tags: [TAGS.work] }
);
