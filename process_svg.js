const fs = require('fs');
let svg = fs.readFileSync('public/bengkulu_map_original.svg', 'utf8');

// Helper: find and replace/remove a group by id
function removeGroup(svgStr, groupId) {
  const idIndex = svgStr.indexOf(`id="${groupId}"`);
  if (idIndex === -1) {
    console.log(`Group ${groupId} not found`);
    return svgStr;
  }
  
  // Find the opening <g tag
  const gTagStart = svgStr.lastIndexOf('<g', idIndex);
  
  // Find the matching closing </g>
  let depth = 1;
  let pos = gTagStart + 2;
  while (pos < svgStr.length && depth > 0) {
    const nextOpen = svgStr.indexOf('<g', pos);
    const nextClose = svgStr.indexOf('</g>', pos);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 2;
    } else {
      depth--;
      pos = nextClose + 4;
    }
  }
  
  const removed = svgStr.substring(gTagStart, pos);
  console.log(`Removed group ${groupId} (${removed.length} chars)`);
  return svgStr.substring(0, gTagStart) + svgStr.substring(pos);
}

// Helper: color all paths in a group
function colorGroup(svgStr, groupId, color) {
  const idIndex = svgStr.indexOf(`id="${groupId}"`);
  if (idIndex === -1) { console.log(`Group ${groupId} not found`); return svgStr; }
  
  const gTagStart = svgStr.lastIndexOf('<g', idIndex);
  let depth = 1;
  let pos = gTagStart + 2;
  while (pos < svgStr.length && depth > 0) {
    const nextOpen = svgStr.indexOf('<g', pos);
    const nextClose = svgStr.indexOf('</g>', pos);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) { depth++; pos = nextOpen + 2; }
    else { depth--; pos = nextClose + 4; }
  }
  
  const groupContent = svgStr.substring(gTagStart, pos);
  const colored = groupContent
    .replace(/fill:#cfcfcf/g, `fill:${color}`)
    .replace(/fill:#cc0000/g, `fill:${color}`);
  
  console.log(`Colored group ${groupId} with ${color}`);
  return svgStr.substring(0, gTagStart) + colored + svgStr.substring(pos);
}

// ── STEP 1: Remove small islands and unneeded groups ──────────────────
// g1450: small island (matrix-scaled, fill:#bfbfbf, no stroke, 8 paths, tiny total d)
svg = removeGroup(svg, 'g1450');
// g2029: another small island cluster (matrix-scaled, fill:#bfbfbf, stroke black)
svg = removeGroup(svg, 'g2029');
// g1420: outer Sumatra areas with black stroke — not part of Bengkulu kabupaten
svg = removeGroup(svg, 'g1420');
// g1554: duplicated border layer with matrix transform — redundant
svg = removeGroup(svg, 'g1554');

// ── STEP 2: Make ocean/background transparent ─────────────────────────
svg = svg.replace(/fill:#c6ecff/g, 'fill:transparent');

// ── STEP 3: Color each kabupaten group ───────────────────────────────
// Colors from reference: greens for north, warm for middle, pink for south
const kabupatenColors = {
  'g2473': '#b5c77e', // Mukomuko - light green
  'g2439': '#7db87a', // Bengkulu Utara - medium green
  'g2462': '#5a9e6d', // Lebong - dark green
  'g2267': '#a0c472', // Rejang Lebong - yellow-green
  'g2453': '#d4844d', // Kepahiang - orange
  'g2368': '#c5964b', // Bengkulu Tengah - amber
  'g2659': '#dbb84a', // Seluma - yellow
  'g2668': '#c8a26a', // Bengkulu kota area - tan
  'g2642': '#b87333', // Bengkulu Selatan - copper
  'g2585': '#e0476b', // Kota Bengkulu - pink/magenta (was red)
  'g3094': '#7db87a', // sub group
  'g3050': '#a0c472', // sub group
  'g3607': '#5a9e6d', // sub group
  'g3651': '#c5964b', // sub group
  'g4107': '#d4844d', // sub group
  'g4273': '#dbb84a', // sub group — Kaur
};

for (const [id, color] of Object.entries(kabupatenColors)) {
  svg = colorGroup(svg, id, color);
}

// ── STEP 4: Ensure white strokes ──────────────────────────────────────
// Thicken the white strokes between kabupaten
svg = svg.replace(/stroke:#ffffff;stroke-width:0\.26666668/g, 'stroke:#ffffff;stroke-width:0.6');
svg = svg.replace(/stroke-width:0\.26666668/g, 'stroke-width:0.6');

// ── STEP 5: Remove outer Sumatra border (bfbfbf, black stroke) ────────
// These are paths with fill:#bfbfbf (non-Bengkulu Sumatra shading)
svg = svg.replace(/<path[^>]+fill:#bfbfbf[^>]*\/>/g, '');

fs.writeFileSync('public/bengkulu_map.svg', svg);
console.log('\nDone! Saved to public/bengkulu_map.svg');
