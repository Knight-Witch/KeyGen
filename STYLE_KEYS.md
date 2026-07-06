# STYLE_KEYS

Initial visual style reference for KeyGen.

This file is a living reference for brand and interface styling. It should be updated whenever visual decisions change.

## Brand Ownership

- Brand umbrella: Knight Witch.
- Project owner: Amanda Ivans.
- Internal app/project name: KeyGen.
- Consumer-facing name: TBD.

## Initial Visual Direction

The app should feel technical, clean, precise, and slightly occult/futuristic without compromising usability.

Design priorities:

- Clear CAD-style workflow.
- Strong contrast.
- Minimal clutter.
- Immediate readability.
- Clear separation between shell, primary legend, secondary legend, and diffuser materials.
- UI should be easy for non-CAD users.

## Draft Palette

These values are placeholders until a full interface pass is designed.

- Background / near-black: `#08080B`
- Panel dark: `#12121A`
- Panel elevated: `#1C1B27`
- Primary text: `#F5F1E8`
- Secondary text: `#B9B2C8`
- Muted text: `#7D768B`
- Knight Witch gold accent: `#D6A84F`
- Arcane violet accent: `#8D5CFF`
- Warning amber: `#F0A33A`
- Error crimson: `#D84646`
- Success green: `#5CC878`

## Material Preview Colors

These are app preview colors, not mandatory physical filament colors.

- Opaque shell preview: black / graphite.
- Primary legend preview: clear white-blue glow.
- Secondary legend preview: muted frosted glow.
- Diffuser preview: translucent milky white.
- Invalid geometry warning: amber overlay.
- Collision or non-manifold failure: red overlay.

## Typography

UI fonts are TBD.

Requirements:

- Must support Latin and Cyrillic cleanly.
- Must render UI text sharply at small sizes.
- Legend fonts are separate from UI fonts and require printability validation.

## UI Notes

- Use a two-mode viewport: normal material preview and backlit preview.
- Use explicit object labels: Shell, Primary Legend, Secondary Legend, Diffuser/Stem.
- Avoid hiding critical export/printability warnings behind icons alone.
- Every generated part should have a visible color/material assignment before export.

## Asset Rules

All app assets must be stored under `/ASSETS/` with descriptive filenames.

Examples:

- `/ASSETS/fonts/`
- `/ASSETS/icons/`
- `/ASSETS/reference/`
- `/ASSETS/export-previews/`
