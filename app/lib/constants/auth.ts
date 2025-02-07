export const AuthStatus = {
	Authenticated: 'authenticated',
	Loading: 'loading',
};

export const AuthError = {
	CredentialsSignin: 'CredentialsSignin',
};

// FIXME: Перенести в common
export const ERROR_TEXT = {
	AUTH_CREDENTIALS:
		'Ошибка авторизации. Пожалуйста, проверьте правильность введенных данных',
	ANY: 'Что-то пошло не так. Пожалуйста попробуйте еще раз',
	NOT_AUTHORIZED: 'Пользователь не авторизован',
	FETCH_USER: 'Ошибка при получении пользователя',
	SAVE_FILE: 'Ошибка при сохранении файла',
};
