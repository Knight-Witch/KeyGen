# Diff Record - KG-20260706-0002

Date: 2026-07-06
Timestamp: 2026-07-06 00:38 America/Los_Angeles
Branch: kg-20260706-0002-dev-ui-docs
Change Type: Documentation update

## Summary

Documentation update for viewport behavior, Blender inspection export, and local development setup.

## Files Added

- DOCS/UI_VIEWPORT_SPEC.md
- DOCS/DEV_SETUP.md
- HISTORY/2026-07-06_ui_viewport_and_dev_setup.md
- DIFFS/KG-20260706-0002_ui_viewport_dev_setup.diff.md

## Files Updated

- MASTER.md
- CHANGELOG.md
- PRE_FLIGHT_Check.md
- DOCS/EXPORT_SPEC.md

## Functional Code Changes

None.

## App Behavior Changes

None. No application code exists yet.

## Key Decisions Introduced

- Future UI should include an interactive 3D viewport.
- Canvas behavior should allow 360 degree keycap inspection.
- Mouse controls should include orbit, zoom, pan, and reset.
- Keyboard shortcuts may exist but should not be required.
- Dev workflow should include Blender-friendly geometry export.
- Local setup should support browser-based dev server testing after app scaffold exists.

## Rollback Plan

Remove the added files and restore updated files to the previous version.
