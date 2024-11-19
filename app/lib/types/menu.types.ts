import { TypeIconName } from './icons.types';

export interface IMenuItem {
	icon: TypeIconName;
	title: string;
	link: '/' | '/about' | '/portfolio' | '/contacts' | '/blog';
}
