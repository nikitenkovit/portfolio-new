export interface FileServiceInterface {
	save(folder: string, file?: File): Promise<string | void>;
	deleteFile(url: string): Promise<void>;
	deleteFolder(folder: string): Promise<void>;
}
