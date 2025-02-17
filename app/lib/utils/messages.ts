export const getTelegramWarningMessage = (
	delay: string | number,
	remainingTime: string | number
) => {
	return `Вы можете отправлять сообщения не чаще одного раза в ${delay} секунд. Осталось ${remainingTime} секунд`;
};
