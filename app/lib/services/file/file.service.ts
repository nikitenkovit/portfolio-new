import { ensureDir } from 'fs-extra';
import { rmdir, unlink, writeFile } from 'fs/promises';
import path from 'path';
import { DEFAULT_UPLOAD_FOLDER_NAME } from '../../constants';
import { FileServiceInterface } from './file.interface';

export class FileService implements FileServiceInterface {
	public async save(folder: string, file?: File): Promise<string | undefined> {
		if (!file || file.size === 0) return;

		const uploadFolder = path.join(DEFAULT_UPLOAD_FOLDER_NAME, folder);

		const url = `${uploadFolder}/${file.name}`;

		await ensureDir(uploadFolder);

		const fileBuffer = await file.arrayBuffer();

		await writeFile(url, Buffer.from(fileBuffer));

		return `/${folder}/${file.name}`;
	}

	public async deleteFile(url: string): Promise<void> {
		const filePath = path.join(DEFAULT_UPLOAD_FOLDER_NAME, url);

		await unlink(filePath);
	}

	public async deleteFolder(folder: string): Promise<void> {
		const folderPath = path.join(DEFAULT_UPLOAD_FOLDER_NAME, folder);

		await rmdir(folderPath, { recursive: true });
	}
}
