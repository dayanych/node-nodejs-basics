import fs from 'fs';
import path from 'path';
import __dirname from './path.js';

const PATH = path.join(__dirname, 'files/fresh.txt');
const CONTENT = 'I am fresh and young';

const create = async () => {
  fs.writeFile(PATH, CONTENT, {flag: 'wx'}, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    console.log('File created');
  });
};

await create();
