export const ONE_MINUTE_IN_SECONDS = 60;
export const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS * 60; // 3600 секунд
export const TWENTY_FOUR_HOURS_IN_MILLISECONDS = 1000 * 60 * 60 * 24; // 86400000 миллисекунд
export const CURRENT_YEAR = new Date().getFullYear();
export const DEFAULT_UPLOAD_FOLDER_NAME = 'public';

export const DEFAULT_DELAY = 7000;

export const ERROR_TEXT = {
	FORM_NOT_VALID: 'Ошибка валидации формы',
	AUTH_CREDENTIALS:
		'Ошибка авторизации. Пожалуйста, проверьте правильность введенных данных',
	ANY: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз',
	NOT_AUTHORIZED: 'Вы не авторизованы',
	FETCH_USER: 'Ошибка при получении пользователя',
	SAVE_FILE: 'Ошибка при сохранении файла',
	SERVER: 'Ошибка работы сервера',
	OUTPUT_DATA: 'Недостаточно исходящих данных или данные неверны',
	NOT_FOUND: 'Данные не найдены. Проверьте запрос и попробуйте снова.',
	DELETE_FILE: 'Не удалось удалить файл',
	SAVE_IMAGE_IN_CREATE_WORK:
		'Новая работа успешно создана. Но произошла ошибка при сохранении изображения. Попробуйте добавить изображение через форму "Изменить"',
	REMOVE_FOLDER_IN_REMOVE_WORK:
		'Работа успешно удалена! Но произошла ошибка при удалении папки с изображениями!',
};
