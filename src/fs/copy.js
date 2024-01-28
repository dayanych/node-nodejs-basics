import fs from 'fs';
import path from 'path';
import __dirname from '../path.js';

const PATH = path.join(__dirname, 'fs', 'files');
const COPY_PATH = path.join(__dirname, 'fs', 'files_copy');

const copy = async () => {
  console.log(PATH);
  const isCopyFolderExists = fs.existsSync(COPY_PATH);
  const isMainFolderExists = fs.existsSync(PATH);

  fs.cp(PATH, COPY_PATH, {recursive: true}, (err) => {
    if (err || isCopyFolderExists || !isMainFolderExists) {
      throw new Error('FS operation failed');
    }

    console.log('Folder copied');
  });
};

await copy();
