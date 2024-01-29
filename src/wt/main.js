import os from 'os';
import path from 'path';
import {Worker, isMainThread} from 'node:worker_threads';
import __dirname from '../path.js';

const PATH = path.join(__dirname, 'wt', 'worker.js');
const STARTING_NUMBER = 10;
const NUM_CPUS = os.cpus().length;

const performCalculations = async () => {
  if (isMainThread) {
    const result = [];
  
    for (let i = 0; i < NUM_CPUS; i++) {
      const worker = new Worker(PATH, {
        workerData: STARTING_NUMBER + i,
      });

      worker.on('message', (message) => {
        result.push(message);
      });
      worker.on('error', () => {
        result.push({
          status: 'error',
          data: null,
        });
      });
      worker.on('exit', () => {
        console.log(result);
      });
    }
  }
};

await performCalculations();
