import { NextRequest, NextResponse } from 'next/server';
import { readTable } from '@/utils/dbUtils';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const users = readTable('users');
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    return NextResponse.json({ message: 'Login successful', user: { id: user.id, name: user.name } });
  }
  return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}
