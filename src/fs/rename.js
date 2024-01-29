import fs from 'fs';
import path from 'path';
import __dirname from '../path.js';

const OLD_PATH = path.join(__dirname, 'fs', 'files/wrongFilename.txt');
const NEW_PATH = path.join(__dirname, 'fs', 'files/properFilename.md');

const rename = async () => {
  const isOldFileExists = fs.existsSync(OLD_PATH);
  const isNewFileExists = fs.existsSync(NEW_PATH);

  fs.rename(OLD_PATH, NEW_PATH, (err) => {
    if (err ||!isOldFileExists || isNewFileExists) {
      throw new Error('FS operation failed');
    }

    console.log('File renamed');
  });
};

await rename();
