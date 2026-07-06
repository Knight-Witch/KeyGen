# 2026-07-06 Initial Project Brief

Update ID: KG-20260706-0001
Timestamp: 2026-07-06 00:23 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Summary

KeyGen was defined as a browser-first parametric CAD generator for customizable backlit mechanical keyboard caps.

The app should let users choose a primary alphabet and secondary alphabet, adjust legend size and placement, preview the backlit result, and export print-ready geometry.

## Core Use Case

The starting test case is an English primary legend with Ukrainian secondary legend on 1u letter keys for a Redragon K580RGB keyboard.

The user should be able to make dual-language keycaps without requiring normal CAD knowledge.

## Manufacturing Direction

The first prototype is FDM-first because current testing hardware is FDM with a 0.2 mm nozzle. Resin support is planned later after the basic geometry, preview, and export path are validated.

## Approved Initial Geometry Model

The MVP will generate three coordinated printable objects:

1. Opaque shell.
2. Semi-translucent stem/diffuser/secondary legend object.
3. Clear primary legend insert.

The secondary legend is integrated into the diffuser/stem part so it naturally appears dimmer or more muted than the clear primary legend and avoids manual alignment as a separate loose part.

## Export Direction

The preferred export format is 3MF because it can preserve multi-object and material assignment workflows better than loose STLs. STL export remains required as a compatibility fallback.

All exported parts must share a common coordinate system and import into slicers already aligned.

## Development Direction

The app should be built as a constrained generator, not as a general CAD editor. Users should configure supported parameters while the app protects printability, geometry validity, and assembly alignment.
