import { ERROR_TEXT } from '@/app/lib/constants/auth';
import { prisma } from '@/app/lib/db';
import { WorkPayload } from '@/app/lib/types/work.type';
import { generateSlug } from '@/app/lib/utils/generateSlug';
import { Work } from '@prisma/client';
import { AuthService } from '../auth/auth.service';
import { FileService } from '../file/file.service';
import { WorkServiceInterface } from './work.interface';

export class WorkService extends AuthService implements WorkServiceInterface {
	private fileService: FileService;

	constructor() {
		super();
		this.fileService = new FileService();
	}

	public async getMany(): Promise<Work[]> {
		return await prisma.work.findMany({
			orderBy: {
				createdAt: 'desc',
			},
		});
	}

	public async getBySlug(slug: string): Promise<Work | null> {
		return await prisma.work.findUnique({
			where: {
				slug,
			},
		});
	}

	public async createWork(work: WorkPayload): Promise<string | void> {
		const isAuthorized = await this.checkUserAuthorization();

		if (!isAuthorized) {
			throw new Error(ERROR_TEXT.NOT_AUTHORIZED);
		}

		const slug = generateSlug(work.title);

		const image = await this.fileService.saveFile('works', work.image);

		await prisma.work.create({
			data: { ...work, slug, image },
		});

		return slug;
	}
}
