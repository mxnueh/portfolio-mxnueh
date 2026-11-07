#!/usr/bin/env node

/**
 * WP6: Contrast checker
 * 
 * Validates color contrast ratios against WCAG 2.1 standards:
 * - AA: 4.5:1 for normal text, 3:1 for large text (18px+)
 * - AAA: 7:1 for normal text, 4.5:1 for large text
 */

// Color definitions from tailwind.config.ts
const colors = {
  light: {
    bg: '#FFFFFF',
    'bg-alt': '#F5F5F7',
    'text-primary': '#1D1D1F',
    'text-secondary': '#6E6E73',
    'text-tertiary': '#767676',
    'accent-fill': '#0059D6',
    'accent-hover': '#0066E3',
    'separator': '#D2D2D7',
  },
  dark: {
    bg: '#000000',
    'bg-alt': '#161617',
    'bg-card': '#1D1D1F',
    'text-primary': '#F5F5F7',
    'text-secondary': '#A1A1A6',
  },
};

// Convert hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// Calculate luminance
function getLuminance(rgb) {
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Calculate contrast ratio
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Check if contrast meets WCAG standards
function checkContrast(ratio, isLargeText = false) {
  const aaThreshold = isLargeText ? 3 : 4.5;
  const aaaThreshold = isLargeText ? 4.5 : 7;
  return {
    pass: ratio >= aaThreshold,
    passAAA: ratio >= aaaThreshold,
    ratio: ratio.toFixed(2),
  };
}

// Test combinations
const tests = [
  // Light mode
  { name: 'Light: Text Primary on BG', fg: colors.light['text-primary'], bg: colors.light.bg, isLarge: false },
  { name: 'Light: Text Secondary on BG', fg: colors.light['text-secondary'], bg: colors.light.bg, isLarge: false },
  { name: 'Light: Text Tertiary on BG', fg: colors.light['text-tertiary'], bg: colors.light.bg, isLarge: false },
  { name: 'Light: Text Primary on BG Alt', fg: colors.light['text-primary'], bg: colors.light['bg-alt'], isLarge: false },
  { name: 'Light: Text Secondary on BG Alt', fg: colors.light['text-secondary'], bg: colors.light['bg-alt'], isLarge: false },
  { name: 'Light: Accent on BG', fg: colors.light['accent-fill'], bg: colors.light.bg, isLarge: false },
  { name: 'Light: Accent on BG Alt', fg: colors.light['accent-fill'], bg: colors.light['bg-alt'], isLarge: false },
  
  // Dark mode
  { name: 'Dark: Text Primary on BG', fg: colors.dark['text-primary'], bg: colors.dark.bg, isLarge: false },
  { name: 'Dark: Text Secondary on BG', fg: colors.dark['text-secondary'], bg: colors.dark.bg, isLarge: false },
  { name: 'Dark: Text Primary on BG Card', fg: colors.dark['text-primary'], bg: colors.dark['bg-card'], isLarge: false },
  { name: 'Dark: Text Primary on BG Alt', fg: colors.dark['text-primary'], bg: colors.dark['bg-alt'], isLarge: false },
  
  // Large text (18px+)
  { name: 'Light: Text Secondary on BG (Large)', fg: colors.light['text-secondary'], bg: colors.light.bg, isLarge: true },
  { name: 'Dark: Text Secondary on BG (Large)', fg: colors.dark['text-secondary'], bg: colors.dark.bg, isLarge: true },
];

console.log('🎨 Checking color contrast ratios...\n');

let allPass = true;
let allPassAAA = true;
const results = tests.map((test) => {
  const ratio = getContrastRatio(test.fg, test.bg);
  const check = checkContrast(ratio, test.isLarge);
  
  if (!check.pass) allPass = false;
  if (!check.passAAA) allPassAAA = false;
  
  return {
    name: test.name,
    ratio: check.ratio,
    pass: check.pass,
    passAAA: check.passAAA,
  };
});

// Display results
results.forEach((result) => {
  const status = result.pass ? '✓' : '✗';
  const aaaStatus = result.passAAA ? '✓' : '✗';
  console.log(`${status} ${result.name}`);
  console.log(`   Ratio: ${result.ratio}:1 (AA: ${aaaStatus} AAA)\n`);
});

// Summary
console.log('\n📊 Summary:');
console.log(`   WCAG AA (4.5:1): ${allPass ? '✓ PASS' : '✗ FAIL'}`);
console.log(`   WCAG AAA (7:1):  ${allPassAAA ? '✓ PASS' : '✗ FAIL'}\n`);

process.exit(allPass ? 0 : 1);
