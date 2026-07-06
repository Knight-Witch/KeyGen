# UI Viewport Spec

Update ID: KG-20260706-0002
Last Updated: 2026-07-06 00:38 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This document defines the long-term 3D viewport and canvas interaction requirements for KeyGen.

The app must eventually provide a visible 3D environment where users can inspect the generated keycap from all angles before export.

## Viewport Requirement

KeyGen should include an interactive 3D viewport for generated keycaps.

The viewport should support:

- 360 degree rotation around the keycap.
- Zoom in and out.
- Pan across the model.
- Reset camera to default view.
- Toggle normal material view.
- Toggle backlit preview view.
- Optional exploded-part view for shell, diffuser/stem/secondary legend, and primary legend insert.

## Mouse Behavior

Preferred desktop controls:

- Left mouse drag: orbit/rotate model.
- Mouse wheel: zoom.
- Middle mouse drag or right mouse drag: pan.
- Double click or reset button: reset view.

Final bindings may change during UX testing, but the behavior must remain simple and familiar to users who have used 3D viewers, slicers, or Blender.

## Keyboard Behavior

Potential keyboard controls:

- `R`: reset view.
- `F`: frame selected keycap.
- `B`: toggle backlit preview.
- `E`: toggle exploded view.
- `1`: front/top presentation preset.
- `2`: side profile preset.
- `3`: bottom/stem inspection preset.

Keyboard shortcuts should not be required for basic use. They are convenience controls only.

## Inspection Modes

### Normal Preview

Shows the shell, primary legend, secondary legend, and diffuser/stem material assignments without simulated lighting.

### Backlit Preview

Shows a simplified illumination preview so the user can judge primary/secondary legend contrast.

### Exploded View

Separates the generated objects visually while preserving their true shared-origin relationship.

Useful for checking:

- Shell cutouts.
- Primary legend insert alignment.
- Secondary legend integration with diffuser.
- Stem position.
- Diffuser plate clearance.

### Section / Cutaway View

Future dev-facing feature. A cutaway or cross-section mode would help inspect internal diffuser and stem placement.

## UX Priority

The viewport is important for the full product, but it does not need to be complete before the earliest geometry prototypes.

Early prototypes may use simpler preview/export tools as long as the architecture does not prevent a full 3D environment later.

## Implementation Direction

Three.js or React Three Fiber remains the expected preview layer. Geometry generation should remain separate from preview rendering so display code does not become the source of truth for printable geometry.
