import { Link } from '@/app/lib/types/links.type';

export const headerData = {
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
};
