import { Link } from '@/app/lib/types/links.type';
import { IMenuItem } from '@/app/lib/types/menu.types';

export const menuDataItems: IMenuItem[] = [
	{
		title: 'Домой',
		link: Link.HOME,
		icon: 'FaHome',
	},
	{
		title: 'Oбо мне',
		link: Link.ABOUT,
		icon: 'FaUser',
	},
	{
		title: 'Портфолио',
		link: Link.WORKS,
		icon: 'FaBriefcase',
	},
	{
		title: 'Контакты',
		link: Link.CONTACTS,
		icon: 'FaEnvelopeOpen',
	},
	{
		title: 'Блог',
		link: Link.BLOG,
		icon: 'FaComments',
	},
];
