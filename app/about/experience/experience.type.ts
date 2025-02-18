import type { TypeIconName } from '@/app/lib/types';

export type Experience = {
	icon: TypeIconName;
	date: string;
	title: string;
	company?: string;
	description: string;
};
