#!/usr/bin/env node
/**
 * check-spacing.mjs
 * 
 * Validates that all spacing (padding, margin, gap, space-*) uses defined tokens.
 * Fails if arbitrary spacing values are found.
 * 
 * Allowed token values: 4, 8, 12, 16, 24, 32, 48, 64, 80, 120 (in px)
 * 
 * Rejected patterns:
 * - p-[...], m-[...], gap-[...], space-*-[...] (arbitrary values)
 * - px-3, py-2 (Tailwind defaults not in our scale)
 * - gap-6 (not in our scale — should be gap-8)
 * - Any spacing value outside the token scale
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../src');

// Define allowed spacing tokens (in px)
const allowedTokens = new Set(['4', '8', '12', '16', '24', '32', '48', '64', '80', '120']);

// Map common non-token values to their closest token
const tokenMappings = {
  '2': '4',    // gap-2 → gap-4
  '3': '4',    // gap-3 → gap-4
  '5': '4',    // gap-5 → gap-4
  '6': '8',    // gap-6 → gap-8
  '7': '8',    // gap-7 → gap-8
  '9': '12',   // gap-9 → gap-12
  '10': '12',  // gap-10 → gap-12
  '11': '12',  // gap-11 → gap-12
};

// Spacing utility patterns to check
const spacingPatterns = [
  // Padding
  { pattern: /\bp-\[(\d+[a-z%]*)\]/g, fix: 'p-[...] arbitrary padding', type: 'arbitrary' },
  { pattern: /\b(?:p[tblr]?|px|py)-(\d+)\b/g, fix: 'padding with value', type: 'value' },
  // Margin
  { pattern: /\bm-\[(\d+[a-z%]*)\]/g, fix: 'm-[...] arbitrary margin', type: 'arbitrary' },
  { pattern: /\b(?:m[tblr]?|mx|my)-(\d+)\b/g, fix: 'margin with value', type: 'value' },
  // Gap
  { pattern: /\bgap-\[(\d+[a-z%]*)\]/g, fix: 'gap-[...] arbitrary gap', type: 'arbitrary' },
  { pattern: /\bgap-([0-9]+)\b/g, fix: 'gap with value', type: 'value' },
  // Space utilities
  { pattern: /\bspace-[xy]-\[(\d+[a-z%]*)\]/g, fix: 'space-*-[...] arbitrary space', type: 'arbitrary' },
  { pattern: /\bspace-[xy]-(\d+)\b/g, fix: 'space-* with value', type: 'value' },
];

let violations = [];
let files = [];

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

// Check each file
for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');

  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];

    // Check for arbitrary spacing (p-[...], m-[...], etc.)
    const arbitraryMatch = line.match(/(?:p|m|gap|space-[xy])-\[[^\]]+\]/g);
    if (arbitraryMatch) {
      for (const match of arbitraryMatch) {
        violations.push({
          file: path.relative(process.cwd(), file),
          line: lineNum + 1,
          violation: match,
          type: 'arbitrary',
          message: `❌ Arbitrary spacing not allowed: ${match}`,
        });
      }
    }

    // Check for non-token spacing values
    const valueMatches = line.matchAll(/\b(?:p[tblrxy]?|m[tblrxy]?|gap|space-[xy])-(\d+)\b/g);
    for (const match of valueMatches) {
      const value = match[1];
      if (!allowedTokens.has(value)) {
        const suggestion = tokenMappings[value] ? ` → use ${match[0].replace(value, tokenMappings[value])}` : '';
        violations.push({
          file: path.relative(process.cwd(), file),
          line: lineNum + 1,
          violation: match[0],
          value,
          type: 'non-token',
          message: `❌ Non-token spacing: ${match[0]} (allowed: 4, 8, 12, 16, 24, 32, 48, 64, 80, 120)${suggestion}`,
        });
      }
    }
  }
}

if (violations.length > 0) {
  console.log('📏 Spacing validation failed\n');
  
  // Group by file
  const byFile = {};
  for (const v of violations) {
    if (!byFile[v.file]) byFile[v.file] = [];
    byFile[v.file].push(v);
  }

  for (const [file, fileViolations] of Object.entries(byFile)) {
    console.log(`\n${file}`);
    for (const v of fileViolations) {
      console.log(`  Line ${v.line}: ${v.message}`);
    }
  }

  console.log(`\n✗ ${violations.length} spacing violation(s) found`);
  process.exit(1);
} else {
  console.log('✓ All spacing uses defined tokens (4, 8, 12, 16, 24, 32, 48, 64, 80, 120 px)');
  console.log(`✓ Checked ${files.length} file(s)`);
  process.exit(0);
}
