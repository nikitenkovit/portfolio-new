export interface TelegramServiceInterface {
	sendMessage(message: string, chatId?: string): Promise<void>;
}
