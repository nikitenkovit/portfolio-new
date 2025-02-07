import { WorkPayload } from '@/app/lib/types/work.type';

export interface WorkServiceInterface {
	createWork(work: WorkPayload): Promise<void>;
}
