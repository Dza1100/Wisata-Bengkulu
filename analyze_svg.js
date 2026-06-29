const fs = require('fs');
let svg = fs.readFileSync('public/bengkulu_map_original.svg', 'utf8');

// Print all g-tags with their attributes and total d-content-length inside
const gRegex = /<g\s+([^>]+?)>/gs;
let match;
while ((match = gRegex.exec(svg)) !== null) {
  const attrs = match[1];
  const id = attrs.match(/id="([^"]+)"/)?.[1];
  const style = attrs.match(/style="([^"]+)"/)?.[1];
  const transform = attrs.match(/transform="([^"]+)"/)?.[1];
  
  if (!id) continue;
  
  // Get content after this g-tag until </g>
  const startPos = match.index + match[0].length;
  // Find the closing tag at same nesting level
  let depth = 1;
  let pos = startPos;
  while (pos < svg.length && depth > 0) {
    const nextOpen = svg.indexOf('<g', pos);
    const nextClose = svg.indexOf('</g>', pos);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 2;
    } else {
      depth--;
      if (depth === 0) {
        const content = svg.substring(startPos, nextClose);
        const dMatches = [...content.matchAll(/d="([^"]+)"/g)];
        const totalDLen = dMatches.reduce((sum, m) => sum + m[1].length, 0);
        const pathCount = dMatches.length;
        console.log(`G: ${id} | paths: ${pathCount} | totalD: ${totalDLen} | transform: ${transform?.substring(0, 50) || 'none'} | style: ${style?.substring(0, 60) || 'none'}`);
      }
      pos = nextClose + 4;
    }
  }
}
