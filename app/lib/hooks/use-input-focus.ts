'use client';
import { useEffect, useRef } from 'react';

export const useInputFocus = () => {
	const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return { inputRef };
};
