import { cp, mkdir, copyFile, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await copyFile('index.html', 'dist/index.html');
await cp('assets', 'dist/assets', { recursive: true });

await cp('upsell', 'dist/upsell', { recursive: true });

console.log('dist pronto per Netlify');
