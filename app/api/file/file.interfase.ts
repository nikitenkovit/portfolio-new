export interface FileServiceInterface {
	saveFile(folder: string, file?: File): Promise<string | void>;
}
