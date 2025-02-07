import { Icons, TypeIconName } from '@/app/lib/types/icons.types';

export const Icon = ({ name }: { name: TypeIconName }) => {
	const IconComponent = Icons[name];

	if (IconComponent) {
		return <IconComponent />;
	}

	return null;
};
