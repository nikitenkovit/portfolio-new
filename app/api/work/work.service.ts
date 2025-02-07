import { ERROR_TEXT } from '@/app/lib/constants/auth';
import { prisma } from '@/app/lib/db';
import { WorkPayload } from '@/app/lib/types/work.type';
import { generateSlug } from '@/app/lib/utils/generateSlug';
import { AuthService } from '../auth/auth.service';
import { FileService } from '../file/file.service';
import { WorkServiceInterface } from './work.interface';

export class WorkService extends AuthService implements WorkServiceInterface {
	public async createWork(work: WorkPayload) {
		const isAuthorized = await this.checkUserAuthorization();

		if (!isAuthorized) {
			throw new Error(ERROR_TEXT.NOT_AUTHORIZED);
		}

		const slug = generateSlug(work.title);

		const image = await new FileService().saveFile('works', work.image);

		await prisma.work.create({
			data: { ...work, slug, image },
		});
	}
}
