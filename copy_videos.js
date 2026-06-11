import fs from 'fs';
import path from 'path';

function copyFile(src, dest) {
  try {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} -> ${dest}`);
  } catch (err) {
    console.error(`Error copying ${src} to ${dest}:`, err);
  }
}

function main() {
  const srcDir = path.join(process.cwd(), 'Videos');
  const destDir = path.join(process.cwd(), 'public', 'videos');

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Created destination dir: ${destDir}`);
  }

  const files = ['Video-1.mp4', 'Video-2.mp4', 'Video-3.mov'];

  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    if (fs.existsSync(srcPath)) {
      copyFile(srcPath, destPath);
    } else {
      console.warn(`Source file not found: ${srcPath}`);
    }
  }
}

main();
