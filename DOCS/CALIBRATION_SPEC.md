# Calibration STL Spec

Update ID: KG-2026-07-06-0009
Last Updated: 2026-07-06 02:42 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

The first calibration STL is a rough physical fit-test cap for the Redragon K580RGB 1u target.

This is not the final three-part keycap geometry. It exists to validate basic scale, height, bottom footprint, and rough MX-style socket fit before investing in the full legend/diffuser architecture.

## Current Calibration Build

Visible app label:

```text
KG-2026-07-06-0009-calibration
```

Export filename:

```text
keygen-redragon-k580-1u-calibration.stl
```

## Placeholder Dimensions

These dimensions are intentionally provisional until measured against a stock keycap.

```text
bottom width: 18.0 mm
bottom depth: 18.0 mm
total height: 8.8 mm
wall thickness: 1.2 mm
top thickness: 1.5 mm
socket outer size: 5.8 mm
socket slot length: 4.2 mm
socket slot width: 1.3 mm
socket height: 5.8 mm
```

## Geometry Method

The current STL is generated from box-based mesh primitives:

- top plate
- four simple side walls
- rough MX-style cross socket material cells

The model is intended for first-pass slicer and physical fit inspection, not final manufacturing.

## Test Goals

Import into Blender and/or Bambu Studio and check:

- scale is in millimeters
- keycap footprint is plausible
- cap height is plausible
- socket appears in the correct location
- STL downloads correctly from the Fourthwall tester page

Physical print test should check:

- whether it seats on the switch
- whether it is too loose or too tight
- whether it bottoms out
- whether it sits too high or too low
- whether the footprint collides with neighboring keys

## Next Iteration Inputs

Useful feedback after test import/print:

- too loose / too tight on switch stem
- cap sits too high / too low
- cap collides with neighboring caps
- cap footprint too wide / too narrow
- socket visibly malformed in slicer
- slicer reports non-manifold or repair warnings
