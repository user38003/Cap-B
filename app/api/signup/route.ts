import { NextRequest, NextResponse } from 'next/server';
import { readTable, writeTable } from '@/utils/dbUtils';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    let users = [];
    try {
        users = readTable('users');
    } catch (err) {
        // 如果表不存在，则初始化为空数组
        users = [];
    }

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
        return NextResponse.json({ message: 'User already exists.' }, { status: 400 });
    }

    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);

    // 将用户数据写入 JSON 数据库
    writeTable('users', users);

    return NextResponse.json({ message: 'User created successfully.' }, { status: 201 });
}
