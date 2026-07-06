export type Vec3 = [number, number, number];
export type Triangle = [Vec3, Vec3, Vec3];

export interface BoxSpec {
  center: Vec3;
  size: Vec3;
}

function subtract(a: Vec3, b: Vec3): Vec3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function cross(a: Vec3, b: Vec3): Vec3 {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}

function normalize(vector: Vec3): Vec3 {
  const length = Math.hypot(vector[0], vector[1], vector[2]);
  if (length === 0) return [0, 0, 0];
  return [vector[0] / length, vector[1] / length, vector[2] / length];
}

function normalFor(triangle: Triangle): Vec3 {
  const edgeA = subtract(triangle[1], triangle[0]);
  const edgeB = subtract(triangle[2], triangle[0]);
  return normalize(cross(edgeA, edgeB));
}

function formatNumber(value: number): string {
  return Number.isInteger(value) ? `${value}` : value.toFixed(5).replace(/0+$/, '').replace(/\.$/, '');
}

function vertexLine(vertex: Vec3): string {
  return `      vertex ${formatNumber(vertex[0])} ${formatNumber(vertex[1])} ${formatNumber(vertex[2])}`;
}

export function boxTriangles(box: BoxSpec): Triangle[] {
  const [cx, cy, cz] = box.center;
  const [sx, sy, sz] = box.size;
  const x0 = cx - sx / 2;
  const x1 = cx + sx / 2;
  const y0 = cy - sy / 2;
  const y1 = cy + sy / 2;
  const z0 = cz - sz / 2;
  const z1 = cz + sz / 2;

  const p000: Vec3 = [x0, y0, z0];
  const p100: Vec3 = [x1, y0, z0];
  const p110: Vec3 = [x1, y1, z0];
  const p010: Vec3 = [x0, y1, z0];
  const p001: Vec3 = [x0, y0, z1];
  const p101: Vec3 = [x1, y0, z1];
  const p111: Vec3 = [x1, y1, z1];
  const p011: Vec3 = [x0, y1, z1];

  return [
    [p000, p100, p110], [p000, p110, p010],
    [p001, p011, p111], [p001, p111, p101],
    [p000, p001, p101], [p000, p101, p100],
    [p100, p101, p111], [p100, p111, p110],
    [p110, p111, p011], [p110, p011, p010],
    [p010, p011, p001], [p010, p001, p000]
  ];
}

export function serializeAsciiStl(name: string, triangles: Triangle[]): string {
  const safeName = name.replace(/[^a-zA-Z0-9_-]/g, '_');
  const lines = [`solid ${safeName}`];

  for (const triangle of triangles) {
    const normal = normalFor(triangle);
    lines.push(`  facet normal ${formatNumber(normal[0])} ${formatNumber(normal[1])} ${formatNumber(normal[2])}`);
    lines.push('    outer loop');
    lines.push(vertexLine(triangle[0]));
    lines.push(vertexLine(triangle[1]));
    lines.push(vertexLine(triangle[2]));
    lines.push('    endloop');
    lines.push('  endfacet');
  }

  lines.push(`endsolid ${safeName}`);
  return lines.join('\n');
}
