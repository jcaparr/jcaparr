// Genera las versiones oscura y clara de cada SVG de src/ y los íconos que no tiene skillicons.
// Uso: node build.mjs
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, 'src');
const out = join(root, 'assets');

// Los SVG se dibujan con la paleta oscura; la clara sale de reemplazar color por color.
const claro = {
  '#0d1117': '#f6f8fa',
  '#161b22': '#ffffff',
  '#21262d': '#eff2f5',
  '#30363d': '#d0d7de',
  '#e6edf3': '#1f2328',
  '#c9d1d9': '#31373d',
  '#8b949e': '#59636e',
  '#6e7681': '#6e7781',
  '#f5a524': '#b45309',
  '#3fb950': '#1a7f37',
  '#58a6ff': '#0969da',
  '#d2a8ff': '#8250df',
  '#a5d6ff': '#0a3069',
};
const patron = new RegExp(Object.keys(claro).join('|'), 'gi');

await mkdir(join(out, 'icons'), { recursive: true });

for (const archivo of (await readdir(src)).filter((f) => f.endsWith('.svg'))) {
  const svg = await readFile(join(src, archivo), 'utf8');
  const nombre = archivo.replace(/\.svg$/, '');
  await writeFile(join(out, `${nombre}-dark.svg`), svg);
  await writeFile(join(out, `${nombre}-light.svg`), svg.replace(patron, (c) => claro[c.toLowerCase()]));
}

// Mismo formato que las fichas de skillicons: cuadrado de 256 con esquinas de 60 y fondo #242938.
// Algunos colores de marca se aclaran porque sobre ese fondo no se ven.
const iconos = {
  claude: '#D97757',
  n8n: '#EA4B71',
  datadog: '#A77EE0',
  newrelic: '#1CE783',
  kibana: '#00BFB3',
  flyway: '#E5484D',
};

for (const [slug, color] of Object.entries(iconos)) {
  const res = await fetch(`https://cdn.simpleicons.org/${slug}`);
  if (!res.ok) throw new Error(`${slug}: ${res.status}`);
  const d = (await res.text()).match(/<path d="([^"]+)"/)[1];
  const ficha =
    `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">` +
    `<rect width="256" height="256" rx="60" fill="#242938"/>` +
    `<path transform="translate(56 56) scale(6)" fill="${color}" d="${d}"/></svg>\n`;
  await writeFile(join(out, 'icons', `${slug}.svg`), ficha);
}

console.log('listo');
