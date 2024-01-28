import fs from 'fs';
import path from 'path';
import zlib from 'zlib'
import __dirname from '../path.js';

const PATH = path.join(__dirname, 'zip', 'files/archive.gz');
const DECOMPRESS_PATH = path.join(__dirname, 'zip', 'files/fileToCompress.txt');

const decompress = async () => {
  fs.createReadStream(PATH).pipe(zlib.createGunzip()).pipe(fs.createWriteStream(DECOMPRESS_PATH));
};

await decompress();
