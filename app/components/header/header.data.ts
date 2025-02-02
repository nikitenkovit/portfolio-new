import { Link } from '@/app/lib/types/links.type';

export const headerData = {
	[Link.Empty]: {
		titlePart: '',
		titlePartColor: '',
		subtitle: '',
	},
	[Link.Home]: {
		titlePart: '',
		titlePartColor: '',
		subtitle: '',
	},
	[Link.About]: {
		titlePart: 'обо',
		titlePartColor: 'мне',
		subtitle: 'резюме',
	},
	[Link.Works]: {
		titlePart: 'новые',
		titlePartColor: 'работы',
		subtitle: 'портфолио',
	},
	[Link.Contacts]: {
		titlePart: 'связаться',
		titlePartColor: 'со мной',
		subtitle: 'контакты',
	},
	[Link.Blog]: {
		titlePart: 'мой',
		titlePartColor: 'блог',
		subtitle: 'посты',
	},
	[Link.Signin]: {
		titlePart: 'вход',
		titlePartColor: 'для админа',
		subtitle: 'вход',
	},
	[Link.Admin]: {
		titlePart: 'панель',
		titlePartColor: 'админа',
		subtitle: 'Админка',
	},
};
