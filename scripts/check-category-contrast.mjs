#!/usr/bin/env node
/**
 * check-category-contrast.mjs
 * 
 * Verifies WCAG AA contrast ratios for category badge tints.
 * Ensures text is readable on tinted backgrounds.
 */

function getLuminance(hex) {
  const rgb = parseInt(hex.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  const [rs, gs, bs] = [r, g, b].map((x) => {
    x = x / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrast(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
}

// Light theme categories
const lightCategories = [
  { name: 'Case study', bg: '#E8F1FF', text: '#0A4FB3' },
  { name: 'Notes', bg: '#EEEBFF', text: '#4B3FC7' },
  { name: 'Beyond code', bg: '#FFF1DB', text: '#8A4B00' },
  { name: 'Status', bg: '#E3F6E8', text: '#1B6B34' },
];

// Dark theme categories (semi-transparent on #1D1D1F card background)
// Need to calculate effective color first
function blendColor(bgHex, fgHex, opacity) {
  const bg = parseInt(bgHex.slice(1), 16);
  const fg = parseInt(fgHex.slice(1), 16);
  
  const blend = (b, f) => Math.round(b * (1 - opacity) + f * opacity);
  
  const r = blend((bg >> 16) & 0xff, (fg >> 16) & 0xff);
  const g = blend((bg >> 8) & 0xff, (fg >> 8) & 0xff);
  const b = blend((bg >> 0) & 0xff, (fg >> 0) & 0xff);
  
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

const darkCategories = [
  // bg: rgba(10, 79, 179, 0.16) on #1D1D1F
  { name: 'Case study (dark)', bg: blendColor('#1D1D1F', '#0A4FB3', 0.16), text: '#8CB8FF' },
  // bg: rgba(75, 63, 199, 0.16) on #1D1D1F
  { name: 'Notes (dark)', bg: blendColor('#1D1D1F', '#4B3FC7', 0.16), text: '#B5A9FF' },
  // bg: rgba(138, 75, 0, 0.16) on #1D1D1F
  { name: 'Beyond code (dark)', bg: blendColor('#1D1D1F', '#8A4B00', 0.16), text: '#FFC15E' },
  // bg: rgba(27, 107, 52, 0.16) on #1D1D1F
  { name: 'Status (dark)', bg: blendColor('#1D1D1F', '#1B6B34', 0.16), text: '#6BD98A' },
];

console.log('📊 Category Badge Contrast Analysis\n');

console.log('Light Theme (WCAG AA target: 4.5:1 for normal text):');
let lightPass = true;
for (const cat of lightCategories) {
  const ratio = getContrast(cat.bg, cat.text);
  const pass = parseFloat(ratio) >= 4.5;
  lightPass = lightPass && pass;
  console.log(`  ${pass ? '✓' : '✗'} ${cat.name}: ${ratio}:1 (text on bg)`);
}

console.log('\nDark Theme (WCAG AA target: 4.5:1 for normal text):');
let darkPass = true;
for (const cat of darkCategories) {
  const ratio = getContrast(cat.bg, cat.text);
  const pass = parseFloat(ratio) >= 4.5;
  darkPass = darkPass && pass;
  console.log(`  ${pass ? '✓' : '✗'} ${cat.name}: ${ratio}:1 (text on bg)`);
}

if (lightPass && darkPass) {
  console.log('\n✓ All category badges meet WCAG AA contrast (4.5:1)');
  process.exit(0);
} else {
  console.log('\n✗ Some category badges fail WCAG AA contrast');
  process.exit(1);
}
