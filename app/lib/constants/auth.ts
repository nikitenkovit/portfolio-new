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
	ANY: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз',
	NOT_AUTHORIZED: 'Вы не авторизованы',
	FETCH_USER: 'Ошибка при получении пользователя',
	SAVE_FILE: 'Ошибка при сохранении файла',
	SERVER: 'Ошибка работы сервера',
	OUTPUT_DATA: 'Недостаточно исходящих данных или данные неверны',
	NOT_FOUND: 'Данные не найдены. Проверьте запрос и попробуйте снова.',
};
