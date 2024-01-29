import fs from 'fs';
import path from 'path';
import zlib from 'zlib'
import __dirname from '../path.js';

const PATH = path.join(__dirname, 'zip', 'files/fileToCompress.txt');
const COMPRESS_PATH = path.join(__dirname, 'zip', 'files/archive.gz');

const compress = async () => {
  fs.createReadStream(PATH).pipe(zlib.createGzip()).pipe(fs.createWriteStream(COMPRESS_PATH));
};

await compress();
