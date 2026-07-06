# CHANGELOG

All notable KeyGen changes are tracked here by update instance.

## KG-20260706-0004 - KeyGen Direct jsDelivr Embed Correction

Date: 2026-07-06
Timestamp: 2026-07-06 01:08 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Change Type: Documentation correction

### Summary

Corrected the hosted test deployment model. KeyGen should use a simple Fourthwall tester-page snippet pointing directly to a built KeyGen script through jsDelivr.

### Decisions Captured

- The website/widget carousel system was only an example of the small-snippet pattern.
- KeyGen should remain separate from website/widget infrastructure.
- The Fourthwall tester page should load a built KeyGen file using the `cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@...` pattern.
- If browser-readable public access is required, use the KeyGen repo or a KeyGen-only public deploy repo.

### Files Added or Updated

- Updated `MASTER.md`.
- Updated `/DOCS/EMBED_DEPLOYMENT_SPEC.md`.
- Updated `/DOCS/DEV_SETUP.md`.
- Updated `CHANGELOG.md`.
- Updated `PRE_FLIGHT_Check.md`.
- Added `/HISTORY/2026-07-06_keygen_direct_jsdelivr_embed.md`.
- Added `/DIFFS/KG-20260706-0004_keygen_direct_jsdelivr_embed.diff.md`.

### Operational Note

Temporary placeholder files were accidentally created and immediately removed from `main` during this correction. They have no final file diff.

### Rollback Notes

This update is documentation-only. Rollback can restore the updated docs to KG-20260706-0003 state and remove the KG-20260706-0004 history/diff files.

### Backup Notes

No backup was created because this is a documentation-only correction and no app source code exists yet.

## KG-20260706-0003 - Hosted Dev Workflow

Date: 2026-07-06
Timestamp: 2026-07-06 00:55 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: kg-20260706-0003-hosted-dev-workflow
Change Type: Documentation update

### Summary

Updated the project workflow so Amanda's primary testing path is a hosted Fourthwall dev/staging page using a small embed snippet rather than local setup.

### Decisions Captured

- Hosted dev/staging testing is the preferred workflow.
- Local setup remains fallback/developer workflow only.
- Future deployment should provide a hidden or restricted dev route for browser testing.
- Generated files should remain downloadable from the hosted dev build for Blender and slicer inspection.
- KeyGen should be built as an embeddable static app bundle that can mount into a Fourthwall HTML/embed block.

### Files Added or Updated

- Updated `MASTER.md`.
- Updated `CHANGELOG.md`.
- Updated `PRE_FLIGHT_Check.md`.
- Updated `/DOCS/DEV_SETUP.md`.
- Added `/DOCS/EMBED_DEPLOYMENT_SPEC.md`.
- Added `/HISTORY/2026-07-06_hosted_dev_workflow.md`.
- Added `/DIFFS/KG-20260706-0003_hosted_dev_workflow.diff.md`.

### Rollback Notes

This update is documentation-only. Rollback can remove the new history/diff/spec records and restore updated tracking/setup files to KG-20260706-0002 state.

### Backup Notes

No backup was created because this is a documentation-only workflow update and no app source code exists yet.

## KG-20260706-0002 - UI Viewport and Dev Setup Docs

Date: 2026-07-06
Timestamp: 2026-07-06 00:38 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: kg-20260706-0002-dev-ui-docs
Change Type: Documentation update

### Summary

Added project requirements for the future 3D canvas/viewport, local development setup, and Blender-friendly geometry inspection exports.

### Decisions Captured

- The app should eventually include an interactive 3D environment.
- Users should be able to rotate/orbit the keycap 360 degrees, zoom, pan, and reset view.
- Keyboard shortcuts may exist for convenience but must not be required for basic use.
- Dev builds should support Blender-friendly geometry inspection export.
- GLB/glTF or OBJ should be considered for Blender inspection, with STL retained for slicer parity.
- Local dev workflow should support browser access through a dev server after app scaffolding exists.

### Files Added or Updated

- Updated `MASTER.md`.
- Updated `CHANGELOG.md`.
- Updated `PRE_FLIGHT_Check.md`.
- Updated `/DOCS/EXPORT_SPEC.md`.
- Added `/DOCS/UI_VIEWPORT_SPEC.md`.
- Added `/DOCS/DEV_SETUP.md`.
- Added `/HISTORY/2026-07-06_ui_viewport_and_dev_setup.md`.
- Added `/DIFFS/KG-20260706-0002_ui_viewport_dev_setup.diff.md`.

### Rollback Notes

This update is documentation-only. Rollback can remove the two new spec files, remove the new history/diff records, and restore the updated tracking files to KG-20260706-0001 state.

### Backup Notes

No backup was created because this is a documentation-only update and no app architecture or source code exists yet.

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
