import { ERROR_TEXT } from '@/app/lib/constants/auth';
import { NextRequest, NextResponse } from 'next/server';
import { WorkService } from './work.service';

export async function GET(request: NextRequest) {
	const slug = request.nextUrl.searchParams.get('slug');

	if (!slug) {
		throw new Error(ERROR_TEXT.OUTPUT_DATA);
	}

	const workService = new WorkService();

	try {
		const work = await workService.getBySlug(slug);

		return NextResponse.json(work, {
			status: 200,
		});
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error(ERROR_TEXT.ANY);
		}
	}
}
