import { IMenuItem } from '@/app/lib/types/menu.types';

export const menuDataItems: IMenuItem[] = [
	{
		title: 'Домой',
		link: '/',
		icon: 'FaHome',
	},
	{
		title: 'Oбо мне',
		link: '/about',
		icon: 'FaUser',
	},
	{
		title: 'Портфолио',
		link: '/portfolio',
		icon: 'FaBriefcase',
	},
	{
		title: 'Контакты',
		link: '/contacts',
		icon: 'FaEnvelopeOpen',
	},
	{
		title: 'Блог',
		link: '/blog',
		icon: 'FaComments',
	},
];
