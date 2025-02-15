'use client';
import { useQuery, UseQueryResult } from 'react-query';
import { UserData } from '../types/user.type';
import { getUserDataUrl } from '../utils/api';

export const useUserData = (): UseQueryResult<UserData> => {
	return useQuery({
		queryKey: 'userData',
		queryFn: () => fetch(getUserDataUrl()).then((res) => res.json()),
	});
};
