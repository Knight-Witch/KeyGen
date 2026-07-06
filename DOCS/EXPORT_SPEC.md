# Export Spec

Update ID: KG-20260706-0001
Last Updated: 2026-07-06 00:23 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This document defines export behavior for KeyGen-generated keycaps.

The export system must preserve object alignment, material roles, and manufacturing clarity.

## Preferred Export: 3MF

3MF is the preferred export format for normal user workflow.

The app should export one assembled 3MF package containing:

- Opaque shell object.
- Semi-translucent stem/diffuser/secondary legend object.
- Clear primary legend insert object.
- Object names.
- Material role metadata where supported.
- Shared origin/coordinate alignment.

## Compatibility Export: STL

The app should also export grouped STL files for slicers or workflows that need them.

Recommended STL package:

```text
keygen_export_<design-id>/
  shell_opaque.stl
  diffuser_stem_secondary.stl
  primary_legend_clear.stl
  manifest.json
```

All STLs must use the same coordinate origin and import aligned.

## Object Naming

Use consistent object names:

- `shell_opaque`
- `diffuser_stem_secondary`
- `primary_legend_clear`

## Material Roles

The export manifest should track intended material use:

```json
{
  "objects": [
    {
      "name": "shell_opaque",
      "role": "shell",
      "defaultMaterial": "black opaque PLA/PETG"
    },
    {
      "name": "diffuser_stem_secondary",
      "role": "diffuser-stem-secondary-legend",
      "defaultMaterial": "frosted or semi-translucent filament"
    },
    {
      "name": "primary_legend_clear",
      "role": "primary-legend",
      "defaultMaterial": "clear or highly translucent filament"
    }
  ]
}
```

## Alignment Requirements

Manual alignment in slicer is not acceptable for the normal workflow.

Every exported object must:

- Use the same unit scale.
- Use the same origin.
- Preserve the same transform basis.
- Import into slicers as a correctly assembled object set.

## Export Validation

Before export, the app should check:

- All expected objects exist.
- Objects are manifold.
- Units are millimeters.
- Object names are assigned.
- Material roles are assigned.
- Legend plugs match shell cutouts.
- No object has unintended transform offsets.
- Manifest values match generated geometry.

## Fulfillment Export

Future Knight Witch fulfillment exports may include:

- Design ID.
- Keyboard target.
- Key row/position.
- Material roles.
- User selected legends.
- Preview image.
- Print profile hint.
- Assembly notes.

No customer-private fulfillment workflow is defined yet.
