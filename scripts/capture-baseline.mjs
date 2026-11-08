#!/usr/bin/env node

/**
 * V0: Baseline screenshot and contrast audit
 * 
 * Captures screenshots of key pages at 3 breakpoints in light and dark themes
 * Saves to docs/visual/before/ for comparison with after-polish version
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseDir = path.resolve(__dirname, '../docs/visual/before');

// Ensure directories exist
fs.mkdirSync(baseDir, { recursive: true });

const breakpoints = [
  { name: '390', width: 390, height: 844 },   // Mobile
  { name: '810', width: 810, height: 1024 },  // Tablet
  { name: '1200', width: 1200, height: 1400 }, // Desktop
];

const pages = [
  { name: 'home', path: '/' },
  { name: 'work-index', path: '/work' },
  { name: 'work-detail', path: '/work/mission-atabey' },
  { name: 'blog-index', path: '/blog' },
  { name: 'blog-detail', path: '/blog/mission-atabey' },
  { name: 'contact', path: '/contact' },
];

async function capture() {
  const browser = await chromium.launch();
  
  try {
    for (const { name, path: pagePath } of pages) {
      for (const bp of breakpoints) {
        for (const theme of ['light', 'dark']) {
          const context = await browser.createBrowserContext({
            colorScheme: theme === 'dark' ? 'dark' : 'light',
            viewport: { width: bp.width, height: bp.height },
          });
          
          const page = await context.newPage();
          
          try {
            await page.goto(`http://localhost:3000${pagePath}`, { waitUntil: 'networkidle' });
            
            // Give it a moment to settle
            await page.waitForTimeout(500);
            
            const filename = `${name}-${bp.name}-${theme}.png`;
            const filepath = path.join(baseDir, filename);
            
            await page.screenshot({ path: filepath, fullPage: true });
            console.log(`✓ ${filename}`);
          } catch (err) {
            console.error(`✗ ${name} ${bp.name} ${theme}:`, err.message);
          } finally {
            await context.close();
          }
        }
      }
    }
  } finally {
    await browser.close();
  }
  
  console.log(`\n✓ Baseline screenshots saved to ${baseDir}`);
}

capture().catch(console.error);
