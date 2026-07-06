# 2026-07-06 UI Viewport and Dev Setup

Update ID: KG-20260706-0002
Timestamp: 2026-07-06 00:38 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Summary

Additional planning requirements were added for the KeyGen interface and development workflow.

## UI Requirement

The app should eventually include a visible 3D environment/canvas where users can inspect generated keycaps.

The viewport should support 360 degree orbit/rotation, zooming, panning, view reset, backlit preview, and optional exploded-object inspection.

This does not need to block early geometry work, but the architecture should not prevent it.

## Blender Inspection Requirement

Development builds should provide an export that can be imported into Blender for inspection, annotation, and visual feedback.

The export should preserve separate generated parts where possible:

- Opaque shell.
- Stem/diffuser/secondary legend.
- Primary legend insert.

Blender inspection export should be treated as a development workflow separate from final manufacturing export.

## Local Dev Requirement

Once the app scaffold exists, local setup should allow the repo to be cloned, dependencies installed, the dev server started, and the app viewed in a browser.
