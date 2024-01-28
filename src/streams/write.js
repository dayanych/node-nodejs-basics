import fs from 'fs';
import path from 'path';
import __dirname from '../path.js';

const PATH = path.join(__dirname, 'streams', 'files/fileToWrite.txt');

const write = async () => {
  const file = fs.createWriteStream(PATH).on('data', () => process.stdout.write('To close the file, press Ctrl+C'));

  process.stdin.on('data', data => file.write(data));
};

await write();
