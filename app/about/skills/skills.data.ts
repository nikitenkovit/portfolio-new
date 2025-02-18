import type { TypeIconName } from '@/app/lib/types';

type Skill = { name: string; icon: TypeIconName };

export const skills: Skill[] = [
	{
		name: 'HTML',
		icon: 'FaHtml5',
	},
	{
		name: 'JavaScript',
		icon: 'SiJavascript',
	},
	{
		name: 'React',
		icon: 'FaReact',
	},
	{
		name: 'Node.js',
		icon: 'SiNodedotjs',
	},
	{
		name: 'CSS',
		icon: 'FaCss3',
	},
	{
		name: 'TypeScript',
		icon: 'SiTypescript',
	},
	{
		name: 'Redux',
		icon: 'SiRedux',
	},
	{
		name: 'NestJs',
		icon: 'SiNestjs',
	},
	{
		name: 'SASS',
		icon: 'FaSass',
	},
	{
		name: 'Jest',
		icon: 'SiJest',
	},
	{
		name: 'Next.js',
		icon: 'SiNextdotjs',
	},
	{
		name: 'PostgreSQL',
		icon: 'SiPostgresql',
	},
];
