import { WorkService } from '@/app/services';
import { NextResponse } from 'next/server';

export async function GET() {
	const works = await WorkService.getMany();

	// FIXME: сделать обработку ошибок
	return NextResponse.json(works, {
		status: 200,
	});
}
