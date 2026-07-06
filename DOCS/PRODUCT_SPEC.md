# Product Spec

Update ID: KG-20260706-0001
Last Updated: 2026-07-06 00:23 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Product Goal

KeyGen lets users generate customizable backlit mechanical keyboard keycaps with primary and secondary language legends.

The app should make dual-language keycap creation accessible to users who do not know CAD while still producing precise, printable geometry.

## MVP User Story

As a user, I want to select a supported keyboard/keycap target, enter a primary and secondary legend, place and scale those legends on the key, preview the normal and backlit result, and export aligned files for 3D printing.

## Initial Target User

- User has a mechanical keyboard with backlighting.
- User wants dual-language legends.
- User may not know CAD.
- User may print at home or order prints from Knight Witch.

## MVP Scope

Included:

- Browser-first app interface.
- Redragon K580RGB as the first physical target.
- 1u letter keys only.
- English primary legend.
- Ukrainian secondary legend.
- FDM print assumptions with 0.2 mm nozzle.
- Opaque shell, clear primary legend, semi-translucent diffuser/secondary legend.
- Normal preview and backlit preview.
- 3MF preferred export.
- STL fallback export.

Not included in MVP:

- Full keyboard set generation.
- Modifier keys.
- Stabilized keys.
- Complex curved profiles beyond the first measured target.
- Resin-specific production settings.
- Full international physical keyboard standards.
- General-purpose CAD editing.

## UX Requirements

The app should guide the user through a simple flow:

1. Choose keyboard/profile target.
2. Choose key or key group.
3. Enter primary legend.
4. Enter secondary legend.
5. Adjust legend size and placement within safe zones.
6. Preview normal material view.
7. Preview backlit view.
8. Run printability validation.
9. Export 3MF or STLs.
10. Optionally submit for Knight Witch print fulfillment.

## Design Principles

- Keep advanced CAD behavior hidden behind simple controls.
- Prevent invalid geometry whenever possible.
- Warn clearly when a legend is too small, too thin, too close to an edge, or likely to print poorly.
- Preserve part alignment automatically.
- Keep export files organized by object and material.
- Start narrow and accurate rather than broad and unreliable.

## MVP Success Criteria

The MVP is successful when:

- A 1u Redragon K580RGB-compatible keycap can be generated.
- English + Ukrainian legends can be placed and exported.
- Exported files import into the slicer already aligned.
- The opaque shell and translucent inserts physically assemble correctly.
- Backlit visibility is acceptable in a real print.
- Printability warnings catch obvious failures before export.
