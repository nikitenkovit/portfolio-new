export interface FileServiceInterface {
	save(folder: string, file?: File): Promise<string | void>;
	delete(fileName: string): Promise<void>;
}
