'use client';
import { useQuery, UseQueryResult } from 'react-query';
import type { UserData } from '../types';
import { getUserDataUrl } from '../utils';

export const useUserData = (): UseQueryResult<UserData> => {
	return useQuery({
		queryKey: 'userData',
		queryFn: () => fetch(getUserDataUrl()).then((res) => res.json()),
	});
};
