import { API_URL } from '../constants/api';

// FIXME: Сделать получения адресов везде через функции
export const getWorkUrl = (slug: string) => `${API_URL}/work?slug=${slug}`;
export const getWorksUrl = () => `${API_URL}/works`;
export const getUserDataUrl = () => 'api/user';
