import { Link } from '@/app/lib/types/links.type';

export const headerData = {
	[Link.HOME]: {
		titlePart: '',
		titlePartColor: '',
		subtitle: '',
	},
	[Link.ABOUT]: {
		titlePart: 'обо',
		titlePartColor: 'мне',
		subtitle: 'резюме',
	},
	[Link.PORTFOLIO]: {
		titlePart: 'новые',
		titlePartColor: 'работы',
		subtitle: 'портфолио',
	},
	[Link.CONTACTS]: {
		titlePart: 'связаться',
		titlePartColor: 'со мной',
		subtitle: 'контакты',
	},
	[Link.BLOG]: {
		titlePart: 'мой',
		titlePartColor: 'блог',
		subtitle: 'посты',
	},
};
