import classNames from 'classnames';
import React, { Ref } from 'react';
import commonStyles from './common-input.module.scss';

type BgColor = 'primary' | 'secondary';

interface IProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
	ref?: Ref<HTMLTextAreaElement>;
	width: string;
	bgColor?: BgColor;
	rows?: number;
}

export const TextareaInput = ({
	ref,
	width,
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
