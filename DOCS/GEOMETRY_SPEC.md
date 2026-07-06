# Geometry Spec

Update ID: KG-20260706-0001
Last Updated: 2026-07-06 00:23 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This document defines the initial geometry model for KeyGen.

The geometry system should generate clean, manifold, slicer-ready keycap parts from a constrained parametric schema.

## Core Geometry Objects

### 1. Opaque Shell

The shell is the exterior keycap body.

Responsibilities:

- Outer side walls.
- Top ceiling surface.
- Primary legend cutout.
- Secondary legend cutout.
- Clearances for internal stem/diffuser assembly.

The shell should be printable in black opaque PLA/PETG baseline material.

### 2. Stem / Diffuser / Secondary Legend

This object combines the switch attachment, the internal light diffuser, and the secondary legend plug.

Responsibilities:

- Fit the target switch stem.
- Support the keycap mechanically.
- Hold an internal diffusion plate close to the underside of the top ceiling.
- Extend the secondary legend geometry upward into the shell cutout.
- Create a muted secondary legend effect through semi-translucent material.

### 3. Primary Legend Insert

This object fills the primary legend cutout with clear or highly translucent material.

Responsibilities:

- Fit the primary legend cutout.
- Finish flush or near-flush with the keycap top.
- Preserve alignment through shared origin/export coordinates.
- Transmit more light than the secondary legend material.

## Coordinate Rules

All generated parts must share the same world origin.

The exported object set must import into a slicer already aligned. Manual user alignment is considered a failure state.

## Keycap Schema Draft

```ts
export interface KeycapSpec {
  keyboardTarget: string;
  profile: KeycapProfile;
  keyUnitWidth: number;
  keyUnitHeight: number;
  row?: string;
  stem: StemSpec;
  shell: ShellSpec;
  diffuser: DiffuserSpec;
  legends: LegendSpec[];
  export: ExportSpec;
}

export interface LegendSpec {
  id: string;
  role: 'primary' | 'secondary';
  text: string;
  script: 'latin' | 'cyrillic' | 'other';
  fontFamily: string;
  fontWeight?: string;
  sizeMm: number;
  positionMm: { x: number; y: number };
  rotationDeg: number;
  extrusionDepthMm: number;
  materialRole: 'clear-primary' | 'diffuser-secondary';
}
```

## Initial Keycap Target

- Keyboard: Redragon K580RGB.
- Key type: 1u letter key.
- Switch/stem: to be measured/confirmed from physical sample.
- Profile: to be measured/confirmed from physical sample.

## Printability Validation Rules

The generator should eventually validate:

- Minimum shell wall thickness.
- Minimum legend stroke width.
- Minimum spacing between legend strokes.
- Minimum spacing between legends and key edges.
- Collision between internal diffuser and shell.
- Collision between stem geometry and legend plug geometry.
- Non-manifold outputs.
- Unsupported floating geometry.
- Excessively thin top ceiling around cutouts.

## Placement Zones

The app should define safe legend placement zones per keycap target.

For the initial prototype, zones can be simple rectangular regions projected onto the top plane. Later versions may support curved or angled top surfaces.

## Boolean Strategy

The generator should derive the shell from constructive operations:

1. Build base shell body.
2. Build internal clearance volume.
3. Build legend cutout volumes.
4. Subtract cutouts from shell.
5. Build diffuser/stem object.
6. Build primary insert object.
7. Validate all generated parts.

## Assembly Notes

The secondary legend plug is part of the diffuser/stem object. This avoids creating a separate loose secondary insert and reduces assembly burden.

The primary legend insert remains separate because it uses a different material from the shell and diffuser.

## Future Geometry Expansion

- Additional 1u rows/profiles.
- Larger modifier keys.
- Stabilized keys.
- Alternate stem systems.
- Resin-specific geometry tolerances.
- Full keyboard layout generation.
