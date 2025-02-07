'use client';

import { usePathname, useRouter } from 'next/navigation';

export const useNavigation = () => {
	const router = useRouter();
	const swap = usePathname().split('/').at(1);

	const goBack = () => {
		router.push(`/${swap}`);
	};

	return { goBack };
};
