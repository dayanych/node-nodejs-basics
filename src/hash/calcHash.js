import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import __dirname from '../path.js';

const PATH = path.join(__dirname, 'hash', 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  const fsStream = fs.createReadStream(PATH).on('data', data => hash.update(data));

  fsStream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
