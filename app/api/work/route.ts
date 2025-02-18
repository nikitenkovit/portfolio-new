import { ERROR_TEXT } from '@/app/lib/constants';
import { WorkService } from '@/app/lib/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const slug = request.nextUrl.searchParams.get('slug');

	if (!slug) {
		throw new Error(ERROR_TEXT.OUTPUT_DATA);
	}

	try {
		const work = await WorkService.getBySlug(slug);

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
