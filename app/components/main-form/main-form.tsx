import { TypeIconName } from '@/app/lib/types/icons.types';
import { MainButtonWrapper } from '../main-button-wrapper';
import styles from './main-form.module.scss';

interface IProps {
	formAction:
		| string
		| ((formData: FormData) => void | Promise<void>)
		| undefined;
	children: React.ReactNode;
	errorMessage?: string | null;
	isPending?: boolean;
	iconName: TypeIconName;
	buttonName: string;
}

export const MainForm = ({
	formAction,
	errorMessage,
	isPending,
	iconName,
	buttonName,
	children,
}: IProps) => {
	return (
		<form action={formAction} className={styles.form}>
			{children}
			{errorMessage && <div className={styles.message}>{errorMessage}</div>}
			<MainButtonWrapper iconName={iconName} pending={isPending}>
				<button type="submit">{buttonName}</button>
			</MainButtonWrapper>
		</form>
	);
};
