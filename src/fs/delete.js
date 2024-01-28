import fs from 'fs';
import path from 'path';
import __dirname from '../path.js';

const PATH = path.join(__dirname, 'fs', 'files/fileToRemove.txt');

const remove = async () => {
  const isFileExists = fs.existsSync(PATH);

  fs.unlink(PATH, (err) => {
    if (err ||!isFileExists) {
      throw new Error('FS operation failed');
    }

    console.log('File removed');
  });
};

await remove();
