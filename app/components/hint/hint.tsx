import styles from './hint.module.scss';

interface IProps {
	children: React.ReactNode;
	text?: React.ReactNode;
	width?: string;
}

export const Hint = ({ children, text, width }: IProps) => {
	return (
		<div className={styles.container}>
			{text && (
				<div className={styles.hint} style={{ width }}>
					{text}
				</div>
			)}
			{children}
		</div>
	);
};
