import { NextResponse } from 'next/server';
import { WorkService } from '../work/work.service';

export async function GET() {
	const workService = new WorkService();
	const works = await workService.getMany();
	// FIXME: сделать обработку ошибок

	return NextResponse.json(works, {
		status: 200,
	});
}
