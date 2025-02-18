import { AuthError, ERROR_TEXT } from '../constants';

export const getAge = () => {
	return new Date().getFullYear() - 1986;
};
export const getExperience = () => {
	return new Date().getFullYear() - 2020;
};
// TODO: перенести в тематический нужный файл
export const getSegment = (pathname: string) => `/${pathname.split('/').at(1)}`;
export const getAuthError = (error?: string | null) => {
	if (error === AuthError.CredentialsSignin) {
		return ERROR_TEXT.AUTH_CREDENTIALS;
	}

	return ERROR_TEXT.ANY;
};

export const getCurrentTimeInSecond = () => Date.now() / 1000;
