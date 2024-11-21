import { TypeIconName } from './icons.types';
import { Link } from './links.type';

export interface IMenuItem {
	icon: TypeIconName;
	title: string;
	link: Link;
}
