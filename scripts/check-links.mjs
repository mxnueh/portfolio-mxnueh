#!/usr/bin/env node

/**
 * WP1: Link integrity checker
 * 
 * Validates all internal links in the application:
 * - Checks hrefs in nav, footer, buttons, text links
 * - Validates routes exist
 * - Reports broken links with file location
 * - Respects feature flags (products)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Site config for feature flags
const siteConfigPath = path.join(rootDir, 'src/config/site.ts');
const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf-8');
const productsEnabled = /products:\s*true/.test(siteConfigContent);

// Known valid routes (static + dynamic patterns)
const validRoutes = [
  '/',
  '/about',
  '/work',
  '/blog',
  '/contact',
  '/components',
  '/es',
  '/es/about',
  '/es/work',
  '/es/blog',
  '/es/contact',
  '/es/components',
];

// Conditionally add products routes
if (productsEnabled) {
  validRoutes.push('/products', '/es/products');
}

// Dynamic route patterns
const dynamicPatterns = [
  { pattern: /^\/work\/[\w-]+$/, source: 'src/data/caseStudies.ts', slugKey: 'slug' },
  { pattern: /^\/blog\/[\w-]+$/, source: 'src/data/posts.ts', slugKey: 'slug' },
  { pattern: /^\/es\/work\/[\w-]+$/, source: 'src/data/caseStudies.ts', slugKey: 'slug' },
  { pattern: /^\/es\/blog\/[\w-]+$/, source: 'src/data/posts.ts', slugKey: 'slug' },
];

if (productsEnabled) {
  dynamicPatterns.push({ pattern: /^\/products\/[\w-]+$/, source: 'src/data/products.ts', slugKey: 'slug' });
  dynamicPatterns.push({ pattern: /^\/es\/products\/[\w-]+$/, source: 'src/data/products.ts', slugKey: 'slug' });
}

// Extract slugs from data files
function extractSlugs(filePath, slugKey) {
  const content = fs.readFileSync(path.join(rootDir, filePath), 'utf-8');
  const slugMatches = content.matchAll(new RegExp(`${slugKey}:\\s*['"]([\\w-]+)['"]`, 'g'));
  return Array.from(slugMatches).map(m => m[1]);
}

// Build full list of valid routes
const allValidRoutes = [...validRoutes];
for (const { pattern, source, slugKey } of dynamicPatterns) {
  const slugs = extractSlugs(source, slugKey);
  const routeBase = pattern.source.replace(/\^|\$|\\w\+|\\-\+|\[\]|\\/g, '').replace(/\\/g, '');
  slugs.forEach(slug => {
    allValidRoutes.push(routeBase.replace('[]', slug));
  });
}

// Find all TypeScript/TSX files
function findFiles(dir, pattern) {
  const results = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      results.push(...findFiles(fullPath, pattern));
    } else if (stat.isFile() && pattern.test(item)) {
      results.push(fullPath);
    }
  }
  
  return results;
}

// Extract href values from files
function extractHrefs(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const hrefs = [];
  
  // Match href="..." and href={`...`} but NOT template literals with ${}
  // Only capture static paths and skip interpolated values
  const staticHrefMatches = content.matchAll(/href=['"`]([^'"`$]+)['"`]/g);
  
  for (const match of staticHrefMatches) {
    const href = match[1];
    if (href && href.startsWith('/') && !href.startsWith('//') && !href.includes('$')) {
      hrefs.push({ href, file: filePath });
    }
  }
  
  return hrefs;
}

// Check if route is valid
function isValidRoute(href) {
  // Exact match
  if (allValidRoutes.includes(href)) return true;
  
  // Dynamic pattern match
  for (const { pattern } of dynamicPatterns) {
    if (pattern.test(href)) return true;
  }
  
  return false;
}

// Main
console.log('🔗 Checking internal links...\n');

const srcDir = path.join(rootDir, 'src');
const files = findFiles(srcDir, /\.(tsx?|jsx?)$/);

const allHrefs = files.flatMap(extractHrefs);

// Filter out /products when products feature is disabled (conditional render)
const hrefsToCheck = allHrefs.filter(({ href }) => {
  if (!productsEnabled && (href.startsWith('/products') || href.startsWith('/es/products'))) return false;
  return true;
});
const brokenLinks = hrefsToCheck.filter(({ href }) => !isValidRoute(href));

if (brokenLinks.length === 0) {
  console.log('✅ All internal links are valid');
  console.log(`   Checked ${hrefsToCheck.length} links across ${files.length} files`);
  console.log(`   Products feature: ${productsEnabled ? 'enabled' : 'disabled'}`);
  process.exit(0);
} else {
  console.log(`❌ Found ${brokenLinks.length} broken link(s):\n`);
  
  for (const { href, file } of brokenLinks) {
    const relativePath = path.relative(rootDir, file);
    console.log(`   ${href}`);
    console.log(`   └─ ${relativePath}\n`);
  }
  
  process.exit(1);
}
