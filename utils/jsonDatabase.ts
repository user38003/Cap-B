import { promises as fs } from 'fs';
import path from 'path';

const databasePath = path.join(process.cwd(), 'database.json');

export async function writeToJsonDatabase(key: string, data: any) {
    try {
        let database = {};
        try {
            const fileContent = await fs.readFile(databasePath, 'utf-8');
            database = JSON.parse(fileContent);
        } catch (error) {
            // 如果文件不存在，则初始化为空对象
            if (error.code !== 'ENOENT') throw error;
        }

        database[key] = data;
        await fs.writeFile(databasePath, JSON.stringify(database, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing to JSON database:', error);
        throw error;
    }
}
