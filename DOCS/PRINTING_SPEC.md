# Printing Spec

Update ID: KG-20260706-0001
Last Updated: 2026-07-06 00:23 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This document tracks manufacturing assumptions for KeyGen-generated keycaps.

## MVP Manufacturing Target

- Process: FDM.
- Nozzle: 0.2 mm.
- Initial printer profile: TBD.
- Initial slicer target: TBD.
- First keyboard target: Redragon K580RGB.
- First key target: 1u letter key.

## Baseline Materials

### Opaque Shell

Default assumption:

- Black opaque PLA or PETG.
- Must be dimensionally stable enough for keycap fit.
- Must produce a clean top surface around legend inserts.

### Primary Legend Insert

Default assumption:

- Clear or highly translucent filament.
- Should transmit more light than the secondary legend.
- Should fit into the primary legend cutout without requiring manual alignment in slicer.

### Diffuser / Stem / Secondary Legend

Default assumption:

- Frosted or semi-translucent filament.
- Should diffuse light across the underside of the keycap top.
- Should carry the secondary legend plug into the shell cutout.
- Should be dimmer or more muted than the primary legend material.

## FDM Constraints

The generator should account for:

- Minimum practical wall thickness.
- Minimum legend stroke width.
- Nozzle diameter.
- Layer height.
- Tolerance between shell cutouts and legend plugs.
- Elephant foot compensation if needed.
- Clearances for the switch stem.
- Strength around the stem trunk.
- Small-feature cooling and print speed.

## Initial Print-Test Questions

To complete the first print profile, measure or confirm:

- Redragon K580RGB 1u keycap outer dimensions.
- Top surface dimensions.
- Keycap height.
- Wall thickness.
- Stem type and dimensions.
- Stem depth.
- Internal clearance.
- Keycap profile and row geometry.
- Desired clearance between insert plugs and shell cutouts.

## Resin Roadmap

Resin support is planned later but is not the MVP source of truth.

Resin may eventually allow:

- Smaller legend details.
- Cleaner surface finish.
- More precise plug/cutout interfaces.
- Faster batch keycap production.

Resin-specific profiles will need separate tolerances, material assumptions, wall rules, and post-processing notes.

## Assembly Notes

The normal FDM workflow should aim for two printed assemblies:

1. Opaque shell with clear primary legend insert assigned in slicer.
2. Semi-translucent diffuser/stem/secondary legend object.

The app may export these as three objects so the slicer can assign materials cleanly, but the physical assembly intent is simple: shell/primary legend plus diffuser/secondary legend.
