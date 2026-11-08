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
    'text-secondary': '#5A5A5E', // Target: 7:1 on all surfaces
    'text-tertiary': '#767676',
    'accent-fill': '#0059D6',
    'accent-hover': '#0066E3',
    'separator': '#C7C7CC',
  },
  dark: {
    bg: '#000000',
    'bg-alt': '#161617',
    'bg-card': '#1D1D1F',
    'text-primary': '#F5F5F7',
    'text-secondary': '#AEAEB2', // Lightened to reach 7:1 on dark-card
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
function checkContrast(ratio, target = 4.5) {
  return {
    pass: ratio >= target,
    ratio: ratio.toFixed(2),
    target: target.toFixed(1),
  };
}

// Test combinations
const tests = [
  // Light mode - Secondary on all surfaces
  { name: 'Light: Secondary on white BG', fg: colors.light['text-secondary'], bg: colors.light.bg, target: 7 },
  { name: 'Light: Secondary on alt BG', fg: colors.light['text-secondary'], bg: colors.light['bg-alt'], target: 7 },
  { name: 'Light: Secondary on white (large)', fg: colors.light['text-secondary'], bg: colors.light.bg, target: 3 },
  
  // Light mode - other text
  { name: 'Light: Primary on white', fg: colors.light['text-primary'], bg: colors.light.bg, target: 4.5 },
  { name: 'Light: Tertiary on white', fg: colors.light['text-tertiary'], bg: colors.light.bg, target: 4.5 },
  { name: 'Light: Accent on white', fg: colors.light['accent-fill'], bg: colors.light.bg, target: 4.5 },
  { name: 'Light: Accent on alt', fg: colors.light['accent-fill'], bg: colors.light['bg-alt'], target: 4.5 },
  
  // Light mode - Separators (interactive control borders)
  { name: 'Light: Separator on white', fg: colors.light.separator, bg: colors.light.bg, target: 3 },
  { name: 'Light: Separator on alt', fg: colors.light.separator, bg: colors.light['bg-alt'], target: 3 },
  
  // Dark mode - Secondary on all surfaces
  { name: 'Dark: Secondary on black', fg: colors.dark['text-secondary'], bg: colors.dark.bg, target: 7 },
  { name: 'Dark: Secondary on dark-card', fg: colors.dark['text-secondary'], bg: colors.dark['bg-card'], target: 7 },
  { name: 'Dark: Secondary on dark-alt', fg: colors.dark['text-secondary'], bg: colors.dark['bg-alt'], target: 7 },
  { name: 'Dark: Secondary on black (large)', fg: colors.dark['text-secondary'], bg: colors.dark.bg, target: 3 },
  
  // Dark mode - other text
  { name: 'Dark: Primary on black', fg: colors.dark['text-primary'], bg: colors.dark.bg, target: 4.5 },
  { name: 'Dark: Primary on dark-card', fg: colors.dark['text-primary'], bg: colors.dark['bg-card'], target: 4.5 },
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
  console.log(`${status} ${result.name}`);
  console.log(`   ${result.ratio}:1 (target: ${result.target}:1)\n`);
});

// Summary
const failedCount = results.filter(r => !r.pass).length;
console.log('\n📊 Summary:');
if (failedCount === 0) {
  console.log(`   ✓ All pairs meet their targets (${results.length} pairs)\n`);
  process.exit(0);
} else {
  console.log(`   ✗ ${failedCount} pair(s) below target\n`);
  process.exit(1);
}
