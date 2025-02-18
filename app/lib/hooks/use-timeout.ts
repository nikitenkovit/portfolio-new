'use client';
import { useEffect, useState } from 'react';
import { DEFAULT_DELAY } from '../constants';

export const useTimeout = (callback?: unknown, delay = DEFAULT_DELAY) => {
	const [isTimeoutActive, setIsTimeoutActive] = useState(!!callback);

	useEffect(() => {
		if (callback) {
			setIsTimeoutActive(true);
			const timer = setTimeout(() => {
				setIsTimeoutActive(false);
			}, delay);
			return () => clearTimeout(timer);
		}
	}, [callback]);

	return isTimeoutActive;
};
