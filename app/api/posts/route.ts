import { NextRequest, NextResponse } from 'next/server';
import { readTable, writeTable, updateRecord, deleteRecord } from '@/utils/dbUtils';

// GET: 返回所有 posts
export async function GET(req: NextRequest) {
  try {
    const posts = readTable('posts');
    return NextResponse.json({ posts });
  } catch (err) {
    return NextResponse.json({ posts: [] });
  }
}

// POST: 新增 post
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get('title')?.toString() || '';
    const postContent = formData.get('post')?.toString() || '';
    if (!title || !postContent) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }
    let posts = [];
    try {
      posts = readTable('posts');
    } catch (_) {
      posts = [];
    }
    const newPost = { id: Date.now(), title, post: postContent };
    posts.push(newPost);
    writeTable('posts', posts);
    return NextResponse.json({ message: 'Post created successfully.', post: newPost });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// PUT: 更新 post
export async function PUT(req: NextRequest) {
  try {
    const formData = await req.formData();
    const id = Number(formData.get('id'));
    const title = formData.get('title')?.toString() || '';
    const postContent = formData.get('post')?.toString() || '';
    if (!id || !title || !postContent) {
      return NextResponse.json({ message: 'id, title and post content are required.' }, { status: 400 });
    }
    const updatedData = { title, post: postContent };
    const updatedPost = updateRecord('posts', id, updatedData);
    return NextResponse.json({ message: 'Post updated successfully.', post: updatedPost });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

// DELETE: 删除特定 post
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get('id'));
    if (!id) {
      return NextResponse.json({ message: 'Post id is required.' }, { status: 400 });
    }
    const deletedPost = deleteRecord('posts', id);
    return NextResponse.json({ message: 'Post deleted successfully.', post: deletedPost });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
