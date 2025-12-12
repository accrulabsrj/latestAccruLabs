#!/usr/bin/env node

/**
 * Benchmark Testing Script for Phase 5
 * 
 * This script helps run initial benchmark tests for:
 * - Lighthouse (performance, accessibility, best practices, SEO)
 * - Build performance
 * - Bundle size analysis
 * 
 * Usage:
 *   node scripts/benchmark.js
 * 
 * Prerequisites:
 *   - npm run build (must succeed)
 *   - Lighthouse CLI (optional, for full Lighthouse tests)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkCommand(command) {
  try {
    execSync(`which ${command}`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function runCommand(command, description) {
  log(`\n${description}...`, 'cyan');
  try {
    const output = execSync(command, { encoding: 'utf-8', stdio: 'pipe' });
    log(`✅ ${description} completed`, 'green');
    return { success: true, output };
  } catch (error) {
    log(`❌ ${description} failed`, 'red');
    log(error.message, 'red');
    return { success: false, error: error.message };
  }
}

function analyzeBundleSize() {
  log('\n📦 Analyzing bundle sizes...', 'cyan');
  
  const buildDir = path.join(process.cwd(), '.next');
  if (!fs.existsSync(buildDir)) {
    log('⚠️  Build directory not found. Run "npm run build" first.', 'yellow');
    return;
  }

  try {
    const staticDir = path.join(buildDir, 'static');
    if (fs.existsSync(staticDir)) {
      const chunks = fs.readdirSync(staticDir);
      let totalSize = 0;
      
      chunks.forEach(chunk => {
        const chunkPath = path.join(staticDir, chunk);
        if (fs.statSync(chunkPath).isDirectory()) {
          const files = fs.readdirSync(chunkPath);
          files.forEach(file => {
            const filePath = path.join(chunkPath, file);
            const stats = fs.statSync(filePath);
            totalSize += stats.size;
          });
        }
      });
      
      const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
      log(`📊 Total bundle size: ${sizeInMB} MB`, 'blue');
      
      if (parseFloat(sizeInMB) > 5) {
        log('⚠️  Bundle size is large. Consider code splitting optimization.', 'yellow');
      } else {
        log('✅ Bundle size is within acceptable range', 'green');
      }
    }
  } catch (error) {
    log(`⚠️  Could not analyze bundle size: ${error.message}`, 'yellow');
  }
}

function main() {
  log('\n🚀 Starting Phase 5 Benchmark Tests', 'blue');
  log('='.repeat(50), 'blue');

  // 1. Build check
  log('\n1️⃣  Checking build...', 'cyan');
  const buildResult = runCommand('npm run build', 'Build');
  if (!buildResult.success) {
    log('\n❌ Build failed. Please fix build errors before running benchmarks.', 'red');
    process.exit(1);
  }

  // 2. Lint check
  log('\n2️⃣  Checking linting...', 'cyan');
  const lintResult = runCommand('npm run lint', 'Linting');
  if (!lintResult.success) {
    log('\n⚠️  Linting issues found. Please review.', 'yellow');
  }

  // 3. TypeScript check
  log('\n3️⃣  Checking TypeScript...', 'cyan');
  const tsCheck = runCommand('npx tsc --noEmit', 'TypeScript check');
  if (!tsCheck.success) {
    log('\n⚠️  TypeScript errors found. Please fix.', 'yellow');
  }

  // 4. Bundle size analysis
  log('\n4️⃣  Analyzing bundle size...', 'cyan');
  analyzeBundleSize();

  // 5. Lighthouse check (if available)
  log('\n5️⃣  Lighthouse testing...', 'cyan');
  if (checkCommand('lighthouse')) {
    log('✅ Lighthouse CLI is available', 'green');
    log('💡 Run: lighthouse http://localhost:3000 --view', 'blue');
    log('   Or use Chrome DevTools Lighthouse panel', 'blue');
  } else {
    log('⚠️  Lighthouse CLI not found. Install with: npm install -g lighthouse', 'yellow');
    log('💡 Alternative: Use Chrome DevTools Lighthouse panel', 'blue');
  }

  // Summary
  log('\n' + '='.repeat(50), 'blue');
  log('📋 Benchmark Test Summary', 'blue');
  log('='.repeat(50), 'blue');
  
  log('\n✅ Completed checks:', 'green');
  log('  - Build: ' + (buildResult.success ? '✅ Pass' : '❌ Fail'), buildResult.success ? 'green' : 'red');
  log('  - Linting: ' + (lintResult.success ? '✅ Pass' : '⚠️  Issues'), lintResult.success ? 'green' : 'yellow');
  log('  - TypeScript: ' + (tsCheck.success ? '✅ Pass' : '⚠️  Issues'), tsCheck.success ? 'green' : 'yellow');
  
  log('\n📝 Next steps:', 'cyan');
  log('  1. Run Lighthouse tests manually (Chrome DevTools or CLI)', 'blue');
  log('  2. Test on multiple browsers (Chrome, Firefox, Safari, Edge)', 'blue');
  log('  3. Test on mobile devices', 'blue');
  log('  4. Run accessibility audit (axe DevTools or Lighthouse)', 'blue');
  log('  5. Check PageSpeed Insights: https://pagespeed.web.dev/', 'blue');
  
  log('\n🎯 Target Metrics:', 'cyan');
  log('  - Lighthouse Performance: 95+', 'blue');
  log('  - Lighthouse Accessibility: 100', 'blue');
  log('  - Lighthouse Best Practices: 100', 'blue');
  log('  - Lighthouse SEO: 100', 'blue');
  log('  - Page Load: < 2s (desktop), < 3s (mobile)', 'blue');
  
  log('\n✨ Benchmark tests completed!', 'green');
}

main();












