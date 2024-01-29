import fs from 'fs';
import path from 'path';
import __dirname from '../path.js';

const PATH = path.join(__dirname, 'streams', 'files/fileToRead.txt');

const read = async () => {
  fs.createReadStream(PATH).on('data', (data) => process.stdout.write(data + '\n'));
};

await read();
