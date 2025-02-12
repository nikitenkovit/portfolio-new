import { ERROR_TEXT } from '@/app/lib/constants/auth';
import { DEFAULT_UPLOAD_FOLDER_NAME } from '@/app/lib/constants/common';
import { ensureDir } from 'fs-extra';
import { rmdir, unlink, writeFile } from 'fs/promises';
import path from 'path';
import { AuthService } from '../auth/auth.service';
import { FileServiceInterface } from './file.interfase';

export class FileService extends AuthService implements FileServiceInterface {
	public async save(folder: string, file?: File): Promise<string | undefined> {
		if (!file || file?.size! === 0) return;

		const isAuthorized = await this.checkUserAuthorization();

		if (!isAuthorized) {
			throw new Error(ERROR_TEXT.NOT_AUTHORIZED);
		}

		const uploadFolder = path.join(DEFAULT_UPLOAD_FOLDER_NAME, folder);

		const url = `${uploadFolder}/${file.name}`;

		await ensureDir(uploadFolder);

		const fileBuffer = await file.arrayBuffer();

		await writeFile(url, Buffer.from(fileBuffer));

		return `/${folder}/${file.name}`;
	}

	public async deleteFile(url: string): Promise<void> {
		const isAuthorized = await this.checkUserAuthorization();

		if (!isAuthorized) {
			throw new Error(ERROR_TEXT.NOT_AUTHORIZED);
		}

		const filePath = path.join(DEFAULT_UPLOAD_FOLDER_NAME, url);

		await unlink(filePath);
	}

	public async deleteFolder(folder: string): Promise<void> {
		const isAuthorized = await this.checkUserAuthorization();

		if (!isAuthorized) {
			throw new Error(ERROR_TEXT.NOT_AUTHORIZED);
		}

		const folderPath = path.join(DEFAULT_UPLOAD_FOLDER_NAME, folder);

		await rmdir(folderPath, { recursive: true });
	}
}
