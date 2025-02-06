import classNames from 'classnames';
import React, { Ref } from 'react';
import commonStyles from './common-input.module.scss';

type BgColor = 'primary' | 'secondary';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement>;
	width: string;
	bgColor?: BgColor;
}

export const TextInput = ({
	ref,
	width,
	bgColor = 'primary',
	...restProps
}: IProps) => {
	return (
		<input
			{...restProps}
			ref={ref}
			style={{ width }}
			className={classNames(commonStyles.commonInput, {
				[commonStyles.primary]: bgColor === 'primary',
				[commonStyles.secondary]: bgColor === 'secondary',
			})}
		/>
	);
};
