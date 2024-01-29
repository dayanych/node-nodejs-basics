import path from 'path';
import { spawn } from 'node:child_process';
import __dirname from '../path.js';

const PATH = path.join(__dirname, 'cp', 'files/script.js');

const spawnChildProcess = async (args) => {
  spawn('node', [PATH, ...args], {
    stdio: ['inherit','inherit','inherit', 'ipc'],
  });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
