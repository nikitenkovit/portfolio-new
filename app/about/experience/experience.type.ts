import { TypeIconName } from '@/app/lib/types/icons.types';

export type Experience = {
	icon: TypeIconName;
	date: string;
	title: string;
	company?: string;
	description: string;
};
