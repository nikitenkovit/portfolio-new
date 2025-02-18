import type { IMenuItem } from '@/app/lib/types';
import { AppLink } from '@/app/lib/types';

export const menuDataItems: IMenuItem[] = [
	{
		title: 'Главная',
		link: AppLink.Home,
		icon: 'FaHome',
	},
	{
		title: 'Oбо мне',
		link: AppLink.About,
		icon: 'FaUser',
	},
	{
		title: 'Работы',
		link: AppLink.Works,
		icon: 'FaBriefcase',
	},
	{
		title: 'Контакты',
		link: AppLink.Contacts,
		icon: 'FaEnvelopeOpen',
	},
	{
		title: 'Блог',
		link: AppLink.Blog,
		icon: 'FaComments',
	},
];

export const loginLink: IMenuItem = {
	title: 'Войти',
	link: AppLink.Signin,
	icon: 'RiLoginCircleLine',
};

export const adminLink: IMenuItem = {
	title: 'Админка',
	link: AppLink.Admin,
	icon: 'RiAdminLine',
};
