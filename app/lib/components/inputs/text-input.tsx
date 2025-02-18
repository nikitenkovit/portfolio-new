import classNames from 'classnames';
import React, { Ref } from 'react';
import { BgInputColor } from '../../types';
import commonStyles from './common-input.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	ref?: Ref<HTMLInputElement>;
	width: string;
	bgColor?: BgInputColor;
	hidden?: boolean;
}

export const TextInput = ({
	ref,
	width,
	bgColor = 'primary',
	hidden = false,
	disabled = false,
	...restProps
}: IProps) => {
	return (
		<input
			{...restProps}
			ref={ref}
			style={{ width }}
			className={classNames(commonStyles.commonInput, {
				[commonStyles.hidden]: hidden,
				[commonStyles.disabled]: disabled,
				[commonStyles.primary]: bgColor === 'primary',
				[commonStyles.secondary]: bgColor === 'secondary',
			})}
		/>
	);
};
