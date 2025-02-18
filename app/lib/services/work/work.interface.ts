import type { WorkPayload } from '@/app/lib/types';
import { Work } from '@prisma/client';

export interface WorkServiceInterface {
	getMany(): Promise<Work[]>;
	getBySlug(slug: string): Promise<Work | null>;
	create(work: WorkPayload): Promise<string | undefined>;
	update(id: string, work: WorkPayload): Promise<string | undefined>;
	delete(id: string): Promise<void>;
}
