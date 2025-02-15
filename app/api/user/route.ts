import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const ip =
		request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
	const userAgent = request.headers.get('user-agent');
	const referer = request.headers.get('referer');

	const userData = {
		ip,
		userAgent,
		referer,
	};

	return NextResponse.json(userData);
}
