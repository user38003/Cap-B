import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest, { params }) {
  // 从 URL 参数中获取文件路径数组，并合并为字符串
  const { path: filePathArray } = params;
  const filePath = Array.isArray(filePathArray) ? filePathArray.join('/') : filePathArray;
  const fullPath = path.join(process.cwd(), 'files', filePath);
  
  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ message: 'File not found' }, { status: 404 });
  }
  
  const fileBuffer = fs.readFileSync(fullPath);
  let contentType = 'application/octet-stream';
  if (fullPath.endsWith('.pdf')) {
    contentType = 'application/pdf';
  } else if (fullPath.endsWith('.jpg') || fullPath.endsWith('.jpeg')) {
    contentType = 'image/jpeg';
  } else if (fullPath.endsWith('.png')) {
    contentType = 'image/png';
  }
  
  return new NextResponse(fileBuffer, {
    headers: { 'Content-Type': contentType },
  });
}
