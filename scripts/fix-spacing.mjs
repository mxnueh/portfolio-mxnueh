#!/usr/bin/env node
/**
 * fix-spacing.mjs
 * 
 * Auto-fixes non-token spacing values by mapping them to the nearest allowed token.
 * Replacement mapping:
 *   1 → 4, 2 → 4, 3 → 4, 5 → 4, 6 → 8, 7 → 8, 9 → 12, 10 → 12, 11 → 12
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../src');

// Mapping for non-token values to token values
const replacements = {
  '1': '4',
  '2': '4',
  '3': '4',
  '5': '4',
  '6': '8',
  '7': '8',
  '9': '12',
  '10': '12',
  '11': '12',
};

let files = [];
let fixedCount = 0;

// Recursively find all TSX/TS files
function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next') {
        walkDir(path.join(dir, entry.name));
      }
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      files.push(path.join(dir, entry.name));
    }
  }
}

walkDir(srcDir);

// Fix each file
for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let originalContent = content;

  // Fix padding/margin/gap/space-* with non-token values
  for (const [oldVal, newVal] of Object.entries(replacements)) {
    // padding: p-2 → p-4, px-3 → px-4, etc.
    content = content.replace(
      new RegExp(`\\b(p[tblrxy]?)-${oldVal}\\b`, 'g'),
      `$1-${newVal}`
    );
    // margin: m-2 → m-4, mx-3 → mx-4, etc.
    content = content.replace(
      new RegExp(`\\b(m[tblrxy]?)-${oldVal}\\b`, 'g'),
      `$1-${newVal}`
    );
    // gap: gap-2 → gap-4
    content = content.replace(
      new RegExp(`\\bgap-${oldVal}\\b`, 'g'),
      `gap-${newVal}`
    );
    // space-y/space-x: space-y-2 → space-y-4
    content = content.replace(
      new RegExp(`\\b(space-[xy])-${oldVal}\\b`, 'g'),
      `$1-${newVal}`
    );
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf-8');
    fixedCount++;
    console.log(`✓ Fixed: ${path.relative(process.cwd(), file)}`);
  }
}

console.log(`\n✓ Fixed spacing in ${fixedCount} file(s)`);
