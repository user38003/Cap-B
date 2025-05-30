import fs from 'fs';
import path from 'path';

const filesDir = path.resolve('./files');
if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir, { recursive: true });
}

export async function saveUploadedFile(file) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}_${file.name}`;
  const filePath = path.join(filesDir, filename);
  fs.writeFileSync(filePath, buffer);
  return `/files/${filename}`; // 返回访问路径（通过rewrite或api访问）
}
