import React from 'react';
import commonStyles from './common-input.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	width: string;
}

export const TextInput = ({ width, ...restProps }: IProps) => {
	return (
		<input
			{...restProps}
			style={{ width }}
			className={commonStyles.commonInput}
		/>
	);
};
