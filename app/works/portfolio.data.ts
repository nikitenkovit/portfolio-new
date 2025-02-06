import { Work } from '../lib/types/portfolio.type';

export const addNewWorkData: Work = {
	year: '',
	title: 'Добавить',
	slug: '',
	description: '',
	technologies: '',
	image: '',
};

export const portfolioData: Work[] = [
	{
		year: '2021',
		title: 'TrekRussia',
		slug: 'trek-russia',
		description:
			'Коммерческий проект. Главная страница для сайта туристической компании TrekRussia. Адаптивная, резиновая верстка по макету Figma.',
		technologies: 'HTML, SCSS, JavaScript',
		link: 'https://trek-russia.com/trekRussia/2021/index.html',
		image: '/portfolio/trekrussia.jpg',
		githubLink: 'https://github.com/nikitenkovit/trekrussia',
	},
	{
		year: '2025',
		title: 'My portfolio',
		slug: 'my-portfolio',
		description:
			'Это проект, который представляет собой виртуальную витрину моих профессиональных достижений и умений.\n' +
			'Сайт создан с использованием современных технологий и подходов к веб-разработке, таких как Next.js, SCSS, PostgreSQL и Prisma.\n' +
			'Основная цель этого проекта – продемонстрировать мои навыки фронтенд-разработки, а также создать удобный и интуитивный интерфейс для потенциальных клиентов и работодателей.' +
			'\n' +
			'\n' +
			'Основные особенности:\n' +
			'- Адаптивный дизайн, обеспечивающий комфортное использование на любых устройствах.\n' +
			'- Чистый и минималистичный UI/UX-дизайн, акцентирующий внимание на контенте.\n' +
			'- Интерактивные элементы и анимации для улучшения пользовательского опыта.\n' +
			'- Оптимизация производительности и скорости загрузки страниц.\n' +
			'- Простая навигация и удобная структура контента.\n' +
			'\n' +
			'Этот проект служит примером того, как я подхожу к созданию сайтов: с вниманием к деталям, стремлением к качеству и ориентацией на потребности пользователей.',
		technologies: 'Next.js, SCSS, PostgreSQL, Prisma',
		image: '/portfolio/my-portfolio.png',
		githubLink: 'https://github.com/nikitenkovit/portfolio-new',
	},
	{
		year: '2024',
		title: 'Cat Energy',
		slug: 'cat-energy',
		description:
			'Сайт функционального питания для котов. Верстка по макету Figma. Создавался с целью прохождения курса по современным методам верстки',
		technologies: 'HTML, SCSS, JavaScript',
		link: 'https://nikitenkovit.github.io/1378865-cat-energy-31/',
		image: '/portfolio/cat-energy.png',
		githubLink: 'https://github.com/nikitenkovit/1378865-cat-energy-31',
	},
];
