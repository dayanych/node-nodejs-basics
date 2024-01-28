import fs from 'fs';
import path from 'path';
import __dirname from './path.js';

const PATH = path.join(__dirname, 'files/fileToRead.txt');

const read = async () => {
  fs.readFile(PATH, (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    console.log(data.toString());
  });
};

await read();
