import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

const videos = [
  {
    url: 'https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-through-vines-in-sunlight-41604-large.mp4',
    dest: 'video1.mp4'
  },
  {
    url: 'https://assets.mixkit.co/videos/preview/mixkit-young-couple-in-love-enjoying-the-sunset-41617-large.mp4',
    dest: 'video2.mp4'
  },
  {
    url: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-in-the-forest-41600-large.mp4',
    dest: 'video3.mp4'
  }
];

async function downloadFile(url, destPath) {
  console.log(`Starting download from ${url} to ${destPath}`);
  let response;
  try {
    response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://mixkit.co/',
        'Accept': 'video/mp4,video/*;q=0.9,text/html,application/xhtml+xml,application/xml;q=0.8,*/*;q=0.5'
      }
    });
  } catch (err) {
    console.warn(`Fetch with custom headers failed: ${err.message}. Retrying with clean headers...`);
  }

  if (!response || response.status === 403 || !response.ok) {
    console.log(`Initial attempt received status ${response ? response.status : 'error'}. Retrying clean fetch without custom headers...`);
    try {
      response = await fetch(url);
    } catch (err) {
      throw new Error(`Failed to fetch ${url} even without custom headers: ${err.message}`);
    }
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: Status ${response.status} ${response.statusText}`);
  }
  const fileStream = fs.createWriteStream(destPath);
  await finished(Readable.fromWeb(response.body).pipe(fileStream));
  console.log(`Successfully downloaded ${destPath}`);
}

async function main() {
  const publicVideosDir = path.join(process.cwd(), 'public', 'videos');
  
  if (!fs.existsSync(publicVideosDir)) {
    fs.mkdirSync(publicVideosDir, { recursive: true });
    console.log(`Created directory: ${publicVideosDir}`);
  }

  for (const item of videos) {
    const destPath = path.join(publicVideosDir, item.dest);
    try {
      await downloadFile(item.url, destPath);
    } catch (err) {
      console.error(`Error downloading ${item.dest}:`, err);
    }
  }
  console.log('All downloads finished.');
}

main().catch(console.error);
