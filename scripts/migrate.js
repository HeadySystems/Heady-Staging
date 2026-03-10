#!/usr/bin/env node
/**
 * Database / storage migration script
 */
import fs from 'fs';
import path from 'path';

const DATA_DIR = process.env.DATA_DIR || './data';

const dirs = ['memories', 'agents', 'sessions', 'logs', 'checkpoints'];

for (const dir of dirs) {
  const full = path.join(DATA_DIR, dir);
  if (!fs.existsSync(full)) {
    fs.mkdirSync(full, { recursive: true });
    console.log(`Created: ${full}`);
  }
}

console.log('Migration complete.');
