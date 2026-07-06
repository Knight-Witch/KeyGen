# KeyGen

KeyGen is a Knight Witch parametric keycap generator for customizable backlit mechanical keyboard caps.

The project goal is to let users configure primary and secondary legends for mechanical keyboard keycaps, preview the backlit result, and export printable geometry for personal fabrication or Knight Witch print fulfillment.

## Initial Product Direction

KeyGen is planned as a browser-first CAD generator. The consumer-facing brand name may change later, but `KeyGen` remains the internal project and code architecture name unless deliberately renamed.

The first prototype target is the Redragon K580RGB keyboard using FDM print testing with a 0.2 mm nozzle. The first supported key type is a 1u letter key.

## MVP Manufacturing Model

The MVP keycap geometry is planned around three coordinated printable objects:

1. Opaque outer shell
   - Mechanical keycap wall/body structure.
   - Top ceiling surface.
   - Primary legend cutout.
   - Secondary legend cutout.

2. Semi-translucent stem/diffuser/secondary legend part
   - Switch attachment stem.
   - Internal diffusion plate pressed near the underside of the top ceiling.
   - Raised secondary legend plug that fits into the secondary legend cutout.

3. Clear primary legend insert
   - Raised primary legend plug that fits into the primary legend cutout.

The app should export a pre-aligned multi-part 3MF file as the preferred manufacturing format and grouped STL files as the compatibility fallback.

## Initial Defaults

- Primary language target: English / Latin alphabet.
- Secondary language target: Ukrainian / Cyrillic alphabet.
- Shell material: black opaque PLA/PETG baseline.
- Primary legend material: clear/translucent filament.
- Diffuser + secondary legend material: frosted or semi-translucent filament.
- Print target: FDM first, resin profile later.

## Planned Technical Stack

- Browser-first app / PWA.
- TypeScript application architecture.
- Parametric model schema for keycap geometry.
- Manifold-based geometry generation.
- Three.js-based preview.
- HarfBuzz-compatible text shaping path for future multilingual expansion.
- 3MF-first export with STL fallback.

## Repository Controls

Project tracking is maintained through:

- `MASTER.md` for rolling project status, feature checklist, roadmap, and removals.
- `CHANGELOG.md` for every update instance.
- `PRE_FLIGHT_Check.md` for pre-flight review history.
- `STYLE_KEYS.md` for visual and brand style references.
- `/HISTORY/` for dated project notes and decisions.
- `/DOCS/` for technical specifications.
- `/ASSETS/` for app assets.
- `/BACKUP_VAULT/` for segregated repo backups when major changes require them.

## Ownership

Created and maintained for Knight Witch by Amanda Ivans.
