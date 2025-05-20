import { NextRequest, NextResponse } from 'next/server';
import { readTable, updateRecord, deleteRecord } from '@/utils/dbUtils';

export async function GET(req: NextRequest) {
  try {
    const users = readTable('users');
    return NextResponse.json({ users });
  } catch (err) {
    return NextResponse.json({ users: [] });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, email, password } = body;
    if (!id || !name || !email || !password) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }
    const updatedUser = updateRecord('users', id, { name, email, password });
    return NextResponse.json({ message: 'User updated successfully.', user: updatedUser });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ message: 'User id is required.' }, { status: 400 });
    }
    const deletedUser = deleteRecord('users', Number(id));
    return NextResponse.json({ message: 'User deleted successfully.', user: deletedUser });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
