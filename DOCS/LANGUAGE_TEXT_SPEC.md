# Language and Text Spec

Update ID: KG-20260706-0001
Last Updated: 2026-07-06 00:23 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This document defines the starting text and legend requirements for KeyGen.

The first target is English primary legends with Ukrainian secondary legends. The architecture should not prevent later language expansion.

## MVP Language Scope

Included:

- Latin alphabet for English primary legends.
- Cyrillic alphabet for Ukrainian secondary legends.
- Single-character 1u key legends.
- User-adjustable size and placement.
- Separate primary and secondary material roles.

Not included in MVP:

- Complex multi-character legends.
- Right-to-left layout.
- CJK character density handling.
- Indic shaping requirements.
- Thai shaping requirements.
- Full international keyboard physical layout variations.

## Text Pipeline Goal

The app should eventually support a robust shaping pipeline:

```text
user text
→ Unicode normalization
→ script/language handling
→ glyph shaping
→ outline extraction
→ printability cleanup
→ geometry generation
```

A HarfBuzz-compatible shaping path is preferred for later expansion.

## MVP Simplification

For the English + Ukrainian 1u MVP, the first implementation can use a constrained Latin/Cyrillic glyph path as long as the module boundaries are designed so a real shaping layer can be added later without replacing the app architecture.

## Legend Roles

### Primary Legend

- Usually larger.
- Usually placed centrally or upper-left/center depending on the selected layout.
- Printed as clear or highly translucent material.
- Intended to be brighter than the secondary legend.

### Secondary Legend

- Usually smaller.
- Usually placed in a secondary corner/zone.
- Integrated with the diffuser/stem object.
- Printed in frosted or semi-translucent material.
- Intended to be visibly readable but less bright than the primary legend.

## Printability Rules

Text geometry must eventually enforce:

- Minimum stroke width.
- Minimum counter/opening size.
- Minimum spacing between glyph components.
- Minimum shell material around cutouts.
- Minimum distance from keycap edge.
- No unsupported islands unless connected to insert geometry.

## Font Rules

The first font choices should be selected for:

- Latin and Cyrillic support.
- Clean geometric outlines.
- Good readability at keycap scale.
- Minimal tiny internal details.
- Compatibility with outline-to-geometry conversion.

Final font selection is TBD.

## Placement Zones

Each key target should define zones such as:

- Center primary.
- Upper-left primary.
- Upper-right secondary.
- Lower-right secondary.
- Custom safe-zone placement.

For MVP, support simple safe zones on 1u top surfaces before expanding to row/profile-specific surfaces.
