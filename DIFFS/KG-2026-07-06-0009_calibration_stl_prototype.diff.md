# Diff Record - KG-2026-07-06-0009 Calibration STL Prototype

Date: 2026-07-06
Timestamp: 2026-07-06 02:42 America/Los_Angeles
Change Type: Geometry prototype and export update

## Summary

Added the first rough Redragon K580RGB 1u calibration STL generator and enabled STL download from the tester page.

## Files Added

- DOCS/CALIBRATION_SPEC.md
- HISTORY/2026-07-06_calibration_stl_prototype.md
- DIFFS/KG-2026-07-06-0009_calibration_stl_prototype.diff.md
- src/core/geometry/stl.ts
- src/core/keycap/calibration.ts

## Files Updated

- MASTER.md
- PRE_FLIGHT_Check.md
- DOCS/FOURTHWALL_TESTER_SNIPPET.md
- dist/keygen-app.js
- src/embed/keygen-app.ts

## Functional Changes

- Adds ASCII STL serialization utilities.
- Adds a provisional box-based calibration cap model.
- Adds a rough MX-style socket approximation.
- Enables Download calibration STL in the embedded UI.
- Updates visible build label to KG-2026-07-06-0009-calibration.

## Rollback Plan

Remove the added calibration/geometry files and restore updated files to KG-2026-07-06-0008 state.
