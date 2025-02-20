import { Session } from 'next-auth';
export const checkUserAuthorization = (session?: Session | null) =>
	Boolean(session?.user);
