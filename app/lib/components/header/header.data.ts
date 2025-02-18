import { AppLink } from '@/app/lib/types';

export const headerData = {
	[AppLink.Empty]: {
		titlePart: '',
		titlePartColor: '',
		subtitle: '',
	},
	[AppLink.Home]: {
		titlePart: '',
		titlePartColor: '',
		subtitle: '',
	},
	[AppLink.About]: {
		titlePart: 'обо',
		titlePartColor: 'мне',
		subtitle: 'резюме',
	},
	[AppLink.Works]: {
		titlePart: 'новые',
		titlePartColor: 'работы',
		subtitle: 'портфолио',
	},
	[AppLink.Contacts]: {
		titlePart: 'Обратная',
		titlePartColor: 'связь',
		subtitle: 'контакт',
	},
	[AppLink.Blog]: {
		titlePart: 'мой',
		titlePartColor: 'блог',
		subtitle: 'посты',
	},
	[AppLink.Signin]: {
		titlePart: 'вход',
		titlePartColor: 'для админа',
		subtitle: 'вход',
	},
	[AppLink.Admin]: {
		titlePart: 'панель',
		titlePartColor: 'админа',
		subtitle: 'Управление',
	},
};
