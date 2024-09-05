import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const response = NextResponse.json({ message: "Logout successful" });
        response.cookies.set('token', '', {
            httpOnly: true,
            maxAge: -1,
        });

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message, status: 500 });
    }
}
