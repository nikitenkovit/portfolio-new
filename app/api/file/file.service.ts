import { ERROR_TEXT } from '@/app/lib/constants/auth';
import { DEFAULT_UPLOAD_FOLDER_NAME } from '@/app/lib/constants/common';
import { ensureDir } from 'fs-extra';
import { unlink, writeFile } from 'fs/promises';
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

		try {
			const uploadFolder = path.join(DEFAULT_UPLOAD_FOLDER_NAME, folder);

			const url = `${uploadFolder}/${file.name}`;

			await ensureDir(uploadFolder);

			const fileBuffer = await file.arrayBuffer();

			await writeFile(url, Buffer.from(fileBuffer));

			return `/${folder}/${file.name}`;
		} catch (error) {
			throw new Error(`${ERROR_TEXT.SAVE_FILE}: ${error}`);
		}
	}

	public async delete(fileName: string): Promise<void> {
		const isAuthorized = await this.checkUserAuthorization();

		if (!isAuthorized) {
			throw new Error(ERROR_TEXT.NOT_AUTHORIZED);
		}

		try {
			const filePath = path.join(DEFAULT_UPLOAD_FOLDER_NAME, fileName);

			await unlink(filePath);
		} catch (error) {
			throw new Error(`${ERROR_TEXT.DELETE_FILE}: ${error}`);
		}
	}
}
