import fs from 'fs';
import path from 'path';
import __dirname from '../path.js';

const PATH = path.join(__dirname, 'fs', 'files');

const list = async () => {
  fs.readdir(PATH, (err, files) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    files.forEach((file) => {
      console.log(file);
    });
  });
};

await list();
