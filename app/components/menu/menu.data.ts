import { Link } from '@/app/lib/types/links.type';
import { IMenuItem } from '@/app/lib/types/menu.types';

export const menuDataItems: IMenuItem[] = [
	{
		title: 'Домой',
		link: Link.Home,
		icon: 'FaHome',
	},
	{
		title: 'Oбо мне',
		link: Link.About,
		icon: 'FaUser',
	},
	{
		title: 'Работы',
		link: Link.Works,
		icon: 'FaBriefcase',
	},
	{
		title: 'Контакты',
		link: Link.Contacts,
		icon: 'FaEnvelopeOpen',
	},
	{
		title: 'Блог',
		link: Link.Blog,
		icon: 'FaComments',
	},
	{
		title: 'Войти',
		link: Link.Login,
		icon: 'RiLoginCircleLine',
	},
];
