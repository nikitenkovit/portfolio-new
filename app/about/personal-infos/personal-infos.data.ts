import { getAge, getExperience } from '@/app/lib/utils/common';

export const personalInfos = [
	{
		dt: 'Имя :',
		dd: 'Виталий',
	},
	{
		dt: 'Город :',
		dd: 'Ростов-на-Дону',
	},
	{
		dt: 'Фамилия :',
		dd: 'Никитенко',
	},
	{
		dt: 'Телефон :',
		dd: '+79185576887',
	},
	{
		dt: 'Возраст :',
		dd: getAge(),
	},
	{
		dt: 'Email :',
		dd: 'Nelot@mail.ru',
	},
	{
		dt: 'Опыт (лет) :',
		dd: getExperience(),
	},
	{
		dt: 'Telegram :',
		dd: '@Neilot',
	},
	{
		dt: 'Freelance :',
		dd: 'Возможен',
	},
	{
		dt: 'Языки :',
		dd: 'Русский, Английский(b1)',
	},
];
