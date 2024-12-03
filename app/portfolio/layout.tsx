export default function PortfolioLayout({
	children,
	workModal,
}: {
	children: React.ReactNode;
	workModal: React.ReactNode;
}) {
	return (
		<>
			{children}
			{workModal}
		</>
	);
}
