# Export Spec

Update ID: KG-20260706-0001
Last Updated: 2026-07-06 00:38 America/Los_Angeles
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

## Blender / Dev Inspection Export

For development, KeyGen should support an inspection export that is easy to import into Blender.

Preferred dev inspection formats:

- GLB or glTF for multi-object scene inspection with material separation.
- OBJ as a fallback when simple mesh inspection is enough.
- STL for slicer-parity inspection.

The Blender inspection export should preserve:

- Separate object names.
- Shared origin.
- Material-role naming.
- Scale in millimeters where possible.
- Shell, diffuser/stem/secondary legend, and primary legend as separate selectable objects.

This export is not necessarily the final manufacturing format. It exists so geometry can be visually inspected, annotated, edited, or mocked up in Blender during development.

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
