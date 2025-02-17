'use client';

import { TWENTY_FOUR_HOURS_IN_MILLISECONDS } from '@/app/lib/constants/common';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: TWENTY_FOUR_HOURS_IN_MILLISECONDS,
		},
	},
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<SessionProvider>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</SessionProvider>
	);
};
