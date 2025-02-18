import type { TypeIconName } from './icons.type';
import type { AppLink } from './link.type';

export interface IMenuItem {
	icon: TypeIconName;
	title: string;
	link: AppLink;
}
