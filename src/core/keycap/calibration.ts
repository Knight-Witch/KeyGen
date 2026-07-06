import { boxTriangles, serializeAsciiStl, type BoxSpec, type Triangle } from '../geometry/stl';

export interface CalibrationKeycapSpec {
  label: string;
  bottomWidthMm: number;
  bottomDepthMm: number;
  heightMm: number;
  wallMm: number;
  topThicknessMm: number;
  socketOuterMm: number;
  socketSlotLengthMm: number;
  socketSlotWidthMm: number;
  socketHeightMm: number;
}

export const REDRAGON_K580_1U_CALIBRATION_SPEC: CalibrationKeycapSpec = {
  label: 'Redragon K580RGB 1u rough calibration cap',
  bottomWidthMm: 18,
  bottomDepthMm: 18,
  heightMm: 8.8,
  wallMm: 1.2,
  topThicknessMm: 1.5,
  socketOuterMm: 5.8,
  socketSlotLengthMm: 4.2,
  socketSlotWidthMm: 1.3,
  socketHeightMm: 5.8
};

function shellBoxes(spec: CalibrationKeycapSpec): BoxSpec[] {
  const width = spec.bottomWidthMm;
  const depth = spec.bottomDepthMm;
  const height = spec.heightMm;
  const wall = spec.wallMm;
  const topThickness = spec.topThicknessMm;
  const sideHeight = height / 2;

  return [
    { center: [0, 0, height - topThickness / 2], size: [width, depth, topThickness] },
    { center: [-(width - wall) / 2, 0, sideHeight / 2], size: [wall, depth, sideHeight] },
    { center: [(width - wall) / 2, 0, sideHeight / 2], size: [wall, depth, sideHeight] },
    { center: [0, -(depth - wall) / 2, sideHeight / 2], size: [width - 2 * wall, wall, sideHeight] },
    { center: [0, (depth - wall) / 2, sideHeight / 2], size: [width - 2 * wall, wall, sideHeight] }
  ];
}

function socketBoxes(spec: CalibrationKeycapSpec): BoxSpec[] {
  const outer = spec.socketOuterMm;
  const slotLength = spec.socketSlotLengthMm;
  const slotWidth = spec.socketSlotWidthMm;
  const height = spec.socketHeightMm;
  const z = height / 2;
  const halfOuter = outer / 2;
  const halfSlotLength = slotLength / 2;
  const halfSlotWidth = slotWidth / 2;

  const xCuts = [-halfOuter, -halfSlotLength, -halfSlotWidth, halfSlotWidth, halfSlotLength, halfOuter];
  const yCuts = [-halfOuter, -halfSlotLength, -halfSlotWidth, halfSlotWidth, halfSlotLength, halfOuter];
  const boxes: BoxSpec[] = [];

  for (let xi = 0; xi < xCuts.length - 1; xi += 1) {
    for (let yi = 0; yi < yCuts.length - 1; yi += 1) {
      const x0 = xCuts[xi];
      const x1 = xCuts[xi + 1];
      const y0 = yCuts[yi];
      const y1 = yCuts[yi + 1];
      const cx = (x0 + x1) / 2;
      const cy = (y0 + y1) / 2;
      const insideHorizontalSlot = Math.abs(cy) <= halfSlotWidth && Math.abs(cx) <= halfSlotLength;
      const insideVerticalSlot = Math.abs(cx) <= halfSlotWidth && Math.abs(cy) <= halfSlotLength;

      if (insideHorizontalSlot || insideVerticalSlot) continue;

      boxes.push({
        center: [cx, cy, z],
        size: [x1 - x0, y1 - y0, height]
      });
    }
  }

  return boxes;
}

export function generateCalibrationKeycapStl(spec = REDRAGON_K580_1U_CALIBRATION_SPEC): string {
  const triangles: Triangle[] = [];

  for (const box of [...shellBoxes(spec), ...socketBoxes(spec)]) {
    triangles.push(...boxTriangles(box));
  }

  return serializeAsciiStl('keygen_redragon_k580_1u_calibration', triangles);
}
