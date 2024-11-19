import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';

import Menu from './components/menu/menu';
import './styles/globals.scss';

const montserrat = Montserrat({
	weight: ['500', '600', '700', '800', '900'],
	style: 'normal',
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-montserrat',
});
const openSans = Open_Sans({
	weight: ['400', '500', '600'],
	style: 'normal',
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-open-sans',
});

export const metadata: Metadata = {
	title: {
		template: '%s | Никитенко Виталий',
		default: 'Никитенко Виталий',
	},
	description:
		'Портфолио front-end разработчика, демонстрирующее мои навыки и проекты. Я специализируюсь на React, Next, Nest, TypeScript, NodeJs, SASS и здесь вы можете ознакомиться с моими работами и достижениями.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={`${montserrat.variable} ${openSans.variable}`}>
				<Menu />
				{children}
			</body>
		</html>
	);
}
