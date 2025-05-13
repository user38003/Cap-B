import fs from 'fs';
import path from 'path';

const databasePath = path.resolve('./database');

export const readTable = (tableName) => {
    const filePath = path.join(databasePath, `${tableName}.json`);
    if (!fs.existsSync(filePath)) {
        throw new Error(`Table "${tableName}" does not exist.`);
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

export const writeTable = (tableName, data) => {
    const filePath = path.join(databasePath, `${tableName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

export const updateRecord = (tableName, id, updatedData) => {
    const tableData = readTable(tableName);
    const recordIndex = tableData.findIndex((record) => record.id === id);
    if (recordIndex === -1) {
        throw new Error(`Record with ID "${id}" not found in table "${tableName}".`);
    }
    tableData[recordIndex] = { ...tableData[recordIndex], ...updatedData };
    writeTable(tableName, tableData);
};
