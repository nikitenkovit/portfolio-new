import NextAuth from 'next-auth';
// Путь не менять! Работает только при абсолютном пути
import { authConfig } from '../../../lib/configs/auth.config';

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
