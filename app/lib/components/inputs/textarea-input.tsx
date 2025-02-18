import classNames from 'classnames';
import React, { Ref } from 'react';
import { BgInputColor } from '../../types';
import commonStyles from './common-input.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
	ref?: Ref<HTMLTextAreaElement>;
	width?: string;
	bgColor?: BgInputColor;
	rows?: number;
}

export const TextareaInput = ({
	ref,
	width = '100%',
	bgColor = 'primary',
	rows,
	...restProps
}: IProps) => {
	return (
		<textarea
			{...restProps}
			ref={ref}
			style={{ width }}
			rows={rows}
			className={classNames(commonStyles.commonInput, commonStyles.noResize, {
				[commonStyles.primary]: bgColor === 'primary',
				[commonStyles.secondary]: bgColor === 'secondary',
			})}
		/>
	);
};
