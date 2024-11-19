// import { Icons, TypeIconName } from '@/app/lib/types/icons.types';
import { Icons, TypeIconName } from '@/app/lib/types/icons.types';
import { FC } from 'react';

export const Icon: FC<{ name: TypeIconName }> = ({ name }) => {
	const IconComponent = Icons[name];

	if (IconComponent) {
		return <IconComponent />;
	}

	return null;
};
