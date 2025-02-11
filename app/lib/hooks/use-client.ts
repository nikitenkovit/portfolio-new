'use client';

import { useEffect } from 'react';
import { useBoolean } from './use-boolean';

export const useClient = () => {
	const [isMounted, setIsMounted] = useBoolean(false);

	useEffect(() => {
		setIsMounted.on();
	}, []);

	return { isMounted };
};
