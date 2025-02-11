import { WorkPayload } from '@/app/lib/types/work.type';
import { Work } from '@prisma/client';

export interface WorkServiceInterface {
	getMany(): Promise<Work[]>;
	getBySlug(slug: string): Promise<Work | null>;
	createWork(work: WorkPayload): Promise<string | undefined>;
	updateWork(id: string, work: WorkPayload): Promise<string | undefined>;
}
