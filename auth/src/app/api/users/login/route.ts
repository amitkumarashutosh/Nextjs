import { connect } from '@/dbConfig/dbConfig';
import { User } from '@/models/user.model';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User does not exist", status: 404 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid password", status: 401 });
        }

        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET as string, {
            expiresIn: '1h',
        });

        const response = NextResponse.json({ message: "Login successful" ,success:true,user,token});
        response.cookies.set('token', token, {
            httpOnly: true, //it help to user cannot directly change the cookies from browser,cookies only changes from server
            maxAge: 60 * 60, 
        });

        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error.message, status: 500 });
    }
}
