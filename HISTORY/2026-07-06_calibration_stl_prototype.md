# 2026-07-06 Calibration STL Prototype

Update ID: KG-2026-07-06-0009
Timestamp: 2026-07-06 02:42 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Summary

The first rough KeyGen calibration STL generator was added.

## Scope

This update adds a downloadable Redragon K580RGB 1u calibration STL to the tester page.

## Implementation

- Added STL mesh serialization utilities.
- Added a provisional box-based calibration keycap model.
- Added a rough MX-style cross socket approximation.
- Added a Download calibration STL button to the embed UI.
- Updated the served browser bundle for immediate testing.

## Intent

This STL is not final manufacturing geometry. It is a physical fit-test artifact intended to validate scale, footprint, height, and rough switch fit before building the full three-part shell/diffuser/legend system.

## Next Step

Download the STL from the tester page, import it into Bambu Studio or Blender, and inspect scale/shape before printing the first test cap.
