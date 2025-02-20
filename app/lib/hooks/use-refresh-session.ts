import { getSession } from 'next-auth/react';
import { useEffect } from 'react';

export const useRefreshSession = () => {
	useEffect(() => {
		getSession();
	}, []);
};
