import { NextRequest, NextResponse } from 'next/server';
import { writeToJsonDatabase } from '@/utils/jsonDatabase'; // 假设 utils 提供了这个方法

let users: { name: string; email: string; password: string }[] = [];

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
        return NextResponse.json({ message: 'User already exists.' }, { status: 400 });
    }

    const newUser = { name, email, password };
    users.push(newUser);

    // 将用户数据写入临时 JSON 数据库
    await writeToJsonDatabase('users', users);

    return NextResponse.json({ message: 'User created successfully.' }, { status: 201 });
}
