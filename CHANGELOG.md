# CHANGELOG

All notable KeyGen changes are tracked here by update instance.

## KG-20260706-0001 - Initial Project Scaffold

Date: 2026-07-06
Timestamp: 2026-07-06 00:23 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: initial-scaffold
Change Type: Documentation and repository scaffold

### Summary

Created the initial project tracking and specification foundation for KeyGen, a browser-first parametric keycap generator for customizable backlit mechanical keyboard caps.

### Decisions Captured

- Internal project/code name remains `KeyGen`.
- Consumer branding may change later without forcing internal architecture renaming.
- Initial target keyboard is Redragon K580RGB.
- MVP starts with 1u letter keys only.
- FDM is the first manufacturing target.
- 0.2 mm nozzle is the first print-test baseline.
- Initial language pair is English primary with Ukrainian secondary.
- Preferred output is pre-aligned multi-part 3MF.
- Compatibility output is grouped STL files.
- MVP geometry uses three coordinated objects:
  1. Opaque shell.
  2. Semi-translucent stem/diffuser/secondary legend.
  3. Clear primary legend insert.

### Files Added or Updated

- Updated `README.md` from initial one-line default into full project README.
- Added `MASTER.md`.
- Added `CHANGELOG.md`.
- Added `PRE_FLIGHT_Check.md`.
- Added `STYLE_KEYS.md`.
- Added `/HISTORY/2026-07-06_initial_project_brief.md`.
- Added `/DOCS/PRODUCT_SPEC.md`.
- Added `/DOCS/GEOMETRY_SPEC.md`.
- Added `/DOCS/EXPORT_SPEC.md`.
- Added `/DOCS/LANGUAGE_TEXT_SPEC.md`.
- Added `/DOCS/PRINTING_SPEC.md`.
- Added `/DIFFS/KG-20260706-0001_initial_scaffold.diff.md`.
- Added `/ASSETS/README.md`.
- Added `/BACKUP_VAULT/README.md`.

### Rollback Notes

This update is documentation-only and does not include app code. Rollback can safely remove the added documentation/scaffold files or restore `README.md` to its original one-line state.

### Backup Notes

No backup was created because this is the initial documentation scaffold and no destructive code changes or major refactor occurred.
