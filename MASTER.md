# KeyGen MASTER

Project source bible for KeyGen. This file tracks product decisions, status, roadmap items, and removals.

Update ID: KG-20260706-0002
Last Updated: 2026-07-06 00:38 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Project Definition

KeyGen is a browser-first parametric CAD generator for customizable backlit mechanical keyboard caps.

Users should be able to choose a keycap target, configure primary and secondary legends, preview the result, and export coordinated geometry for 3D printing or Knight Witch fulfillment.

## Current MVP Target

- Keyboard: Redragon K580RGB.
- Key type: 1u letter keys only.
- Print process: FDM first.
- Nozzle target: 0.2 mm.
- Primary test language: English / Latin.
- Secondary test language: Ukrainian / Cyrillic.
- Default shell: black opaque PLA/PETG baseline.
- Default primary legend: clear/translucent filament.
- Default diffuser + secondary legend: frosted or semi-translucent filament.

## Approved Initial Architecture

- Browser-first app / PWA.
- TypeScript codebase.
- Parametric model schema.
- Manifold geometry generation.
- Three.js preview layer.
- HarfBuzz-compatible shaping path for multilingual expansion.
- Preferred export: pre-aligned 3MF.
- Compatibility export: grouped STLs.
- Dev inspection export: Blender-friendly GLB/glTF or OBJ where useful.

## Approved MVP Geometry Model

Three coordinated printable objects:

1. Opaque shell
   - Four-wall keycap body plus top ceiling.
   - Primary legend cutout.
   - Secondary legend cutout.
   - Designed to accept legend plugs flush to the key surface.

2. Semi-translucent stem/diffuser/secondary legend
   - Switch attachment stem.
   - Internal diffusion plate.
   - Secondary legend plug extending upward into secondary legend cutout.

3. Clear primary legend insert
   - Primary legend plug extending into primary legend cutout.

All exported objects must share a common origin and coordinate system to avoid manual slicer alignment.

## Active Roadmap

### Phase 0 - Documentation and Scaffolding

Status: In progress.

- [x] Create README.
- [x] Create MASTER tracker.
- [x] Create CHANGELOG.
- [x] Create PRE_FLIGHT_Check log.
- [x] Create STYLE_KEYS.
- [x] Create HISTORY seed note.
- [x] Create initial technical specs.
- [x] Add local dev setup documentation.
- [x] Add UI viewport specification.
- [x] Add Blender/dev inspection export requirement.
- [ ] Create app scaffold.
- [ ] Define package manager and scripts.
- [ ] Add linting/formatting rules.

### Phase 1 - 1u Keycap Geometry Prototype

Status: Planned.

- [ ] Measure Redragon K580RGB 1u keycap dimensions.
- [ ] Confirm switch/stem compatibility and tolerances.
- [ ] Define initial shell profile.
- [ ] Generate basic opaque shell.
- [ ] Generate stem/diffuser part.
- [ ] Generate primary legend plug.
- [ ] Generate secondary legend plug integrated with diffuser.
- [ ] Export pre-aligned STLs.
- [ ] Export Blender/dev inspection file.
- [ ] Validate import into Blender.
- [ ] Validate import into slicer.
- [ ] Print first FDM test.

### Phase 2 - Browser Preview and Editing UI

Status: Planned.

- [ ] Build 3D preview viewport.
- [ ] Add 360 degree orbit/rotate behavior.
- [ ] Add zoom and pan behavior.
- [ ] Add view reset behavior.
- [ ] Add primary legend controls.
- [ ] Add secondary legend controls.
- [ ] Add placement zones.
- [ ] Add backlight preview mode.
- [ ] Add exploded object inspection mode.
- [ ] Add printability validator.

### Phase 3 - 3MF Export

Status: Planned.

- [ ] Define 3MF export package structure.
- [ ] Preserve material/object assignments.
- [ ] Export assembled model with shared origin.
- [ ] Validate import in Bambu Studio or target slicer.

### Phase 4 - Expanded Key Support

Status: Planned.

- [ ] Add additional 1u rows/profiles if needed.
- [ ] Add modifier keys.
- [ ] Add stabilized keys.
- [ ] Add alternate switch stem profiles.
- [ ] Add resin print profile.

### Phase 5 - Fulfillment Workflow

Status: Planned.

- [ ] Add order/export package metadata.
- [ ] Add quote/order handoff path.
- [ ] Add user design save/load.
- [ ] Add branding layer after internal app architecture is stable.

## Technical Decisions

- Internal project name remains `KeyGen` even if consumer branding changes.
- Brand ownership/metadata should reference Knight Witch / Amanda Ivans.
- User-facing UX must prioritize simple configuration over freeform CAD editing.
- All generated print parts must remain slicer-aligned by default.
- FDM-first settings are the MVP source of truth until resin support is formally added.
- The app should eventually include a visible 3D environment with easy mouse/keyboard inspection controls.
- Dev builds should provide Blender-friendly geometry export for inspection and visual feedback.

## Open Questions

- Exact measured dimensions for the Redragon K580RGB 1u cap.
- Exact keycap profile used by the Redragon K580RGB stock caps.
- Final default font for Latin/Cyrillic legends.
- Minimum accepted legend stroke width for reliable 0.2 mm FDM output.
- Preferred slicer validation target.
- Preferred Blender inspection format after first geometry export tests.

## Removals / Decisions Against

No removals recorded yet.

## Notes

Major refactors or architecture rewrites require a segregated backup in `/BACKUP_VAULT/` using the naming convention `REPO_BACKUP_mm-dd-yy_timestamp`. No backup is required for documentation-only updates that do not alter existing app architecture.
