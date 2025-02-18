import type { TypeIconName } from '@/app/lib/types';
import { Icons } from '@/app/lib/types';

export const Icon = ({ name }: { name: TypeIconName }) => {
	const IconComponent = Icons[name];

	if (IconComponent) {
		return <IconComponent />;
	}

	return null;
};
