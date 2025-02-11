import Works from '../page';

export default function PortfolioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Works />
			{children}
		</>
	);
}
