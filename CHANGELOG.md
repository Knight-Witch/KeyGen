# CHANGELOG

All notable KeyGen changes are tracked here by update instance.

## KG-2026-07-06-0009 - Calibration STL Prototype

Date: 2026-07-06
Timestamp: 2026-07-06 02:42 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: main
Change Type: Geometry prototype and export update

### Summary

Added the first rough Redragon K580RGB 1u calibration STL generator and enabled a real STL download from the Fourthwall tester page.

### Files Added or Updated

- Added `src/core/geometry/stl.ts`.
- Added `src/core/keycap/calibration.ts`.
- Added `DOCS/CALIBRATION_SPEC.md`.
- Added `HISTORY/2026-07-06_calibration_stl_prototype.md`.
- Added `DIFFS/KG-2026-07-06-0009_calibration_stl_prototype.diff.md`.
- Updated `src/embed/keygen-app.ts`.
- Updated `dist/keygen-app.js`.
- Updated `DOCS/FOURTHWALL_TESTER_SNIPPET.md`.
- Updated `MASTER.md`.
- Updated `PRE_FLIGHT_Check.md`.
- Updated `CHANGELOG.md`.

### Rollback Notes

Remove the added calibration/geometry files and restore updated files to KG-2026-07-06-0008 state.

### Backup Notes

No backup was created because this is additive prototype work, not a destructive refactor.

## KG-2026-07-06-0008 - Version Label Format

Date: 2026-07-06
Timestamp: 2026-07-06 02:24 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: main
Change Type: Version label update

### Summary

Updated visible development build labels to use the readable `KG-YYYY-MM-DD-xxxx-label` pattern.

### Files Added or Updated

- Updated `dist/keygen-app.js`.
- Updated `src/embed/keygen-app.ts`.
- Updated `DOCS/FOURTHWALL_TESTER_SNIPPET.md`.
- Added `HISTORY/2026-07-06_version_label_format.md`.
- Added `DIFFS/KG-2026-07-06-0008_version_label_format.diff.md`.
- Updated `PRE_FLIGHT_Check.md`.

### Rollback Notes

Restore the previous visible version string and snippet cache-buster.

## KG-20260706-0007 - Fourthwall Embed Validated

Date: 2026-07-06
Timestamp: 2026-07-06 02:12 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: main
Change Type: Status update

### Summary

Confirmed the Fourthwall tester page rendered the KeyGen embed and loaded the external jsDelivr script successfully.

### Files Added or Updated

- Updated `MASTER.md`.
- Added `HISTORY/2026-07-06_embed_validated.md`.
- Added `DIFFS/KG-20260706-0007_embed_validated.diff.md`.

### Rollback Notes

Restore `MASTER.md` to the prior state and remove the validation history/diff records.

## KG-20260706-0006 - Embed Diagnostics

Date: 2026-07-06
Timestamp: 2026-07-06 02:05 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: main
Change Type: Embed diagnostic patch

### Summary

Added visible diagnostics after the first tester page attempt showed no visible output.

### Files Added or Updated

- Updated `dist/keygen-app.js`.
- Updated `DOCS/FOURTHWALL_TESTER_SNIPPET.md`.
- Updated `PRE_FLIGHT_Check.md`.
- Added `HISTORY/2026-07-06_embed_diagnostics.md`.
- Added `DIFFS/KG-20260706-0006_embed_diagnostics.diff.md`.

### Rollback Notes

Restore updated files to KG-20260706-0005 state and remove diagnostic history/diff records.

## KG-20260706-0005 - Embeddable App Scaffold

Date: 2026-07-06
Timestamp: 2026-07-06 01:28 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: kg-20260706-0005-app
Change Type: App scaffold and direct embed prototype

### Summary

Added the first runnable KeyGen embed prototype. The scaffold uses Vite + TypeScript and includes a browser-readable `dist/keygen-app.js` file for direct Fourthwall tester-page embedding.

### Files Added or Updated

- Added `package.json`.
- Added `.gitignore`.
- Added `tsconfig.json`.
- Added `vite.config.ts`.
- Added `index.html`.
- Added `src/core/keycap/types.ts`.
- Added `src/core/keycap/defaults.ts`.
- Added `src/core/keycap/validation.ts`.
- Added `src/embed/styles.ts`.
- Added `src/embed/keygen-app.ts`.
- Added `dist/keygen-app.js`.
- Added `DOCS/FOURTHWALL_TESTER_SNIPPET.md`.
- Added `HISTORY/2026-07-06_app_scaffold_embed_prototype.md`.
- Added `DIFFS/KG-20260706-0005_app_scaffold_embed_prototype.diff.md`.
- Updated `MASTER.md`.
- Updated `CHANGELOG.md`.
- Updated `PRE_FLIGHT_Check.md`.

### Rollback Notes

Remove the new app/source/dist/doc/history/diff files and restore tracking documents to KG-20260706-0004 state.

## KG-20260706-0004 - KeyGen Direct jsDelivr Embed Correction

Date: 2026-07-06
Timestamp: 2026-07-06 01:08 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Change Type: Documentation correction

### Summary

Corrected the hosted test deployment model. KeyGen should use a simple Fourthwall tester-page snippet pointing directly to a built KeyGen script through jsDelivr.

### Files Added or Updated

- Updated `MASTER.md`.
- Updated `DOCS/EMBED_DEPLOYMENT_SPEC.md`.
- Updated `DOCS/DEV_SETUP.md`.
- Updated `CHANGELOG.md`.
- Updated `PRE_FLIGHT_Check.md`.
- Added `HISTORY/2026-07-06_keygen_direct_jsdelivr_embed.md`.
- Added `DIFFS/KG-20260706-0004_keygen_direct_jsdelivr_embed.diff.md`.

### Rollback Notes

Restore updated docs to KG-20260706-0003 state and remove the KG-20260706-0004 history/diff files.

## KG-20260706-0003 - Hosted Dev Workflow

Date: 2026-07-06
Timestamp: 2026-07-06 00:55 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: kg-20260706-0003-hosted-dev-workflow
Change Type: Documentation update

### Summary

Updated the project workflow so Amanda's primary testing path is a hosted Fourthwall dev/staging page using a small embed snippet rather than local setup.

### Files Added or Updated

- Updated `MASTER.md`.
- Updated `CHANGELOG.md`.
- Updated `PRE_FLIGHT_Check.md`.
- Updated `DOCS/DEV_SETUP.md`.
- Added `DOCS/EMBED_DEPLOYMENT_SPEC.md`.
- Added `HISTORY/2026-07-06_hosted_dev_workflow.md`.
- Added `DIFFS/KG-20260706-0003_hosted_dev_workflow.diff.md`.

### Rollback Notes

Remove the new history/diff/spec records and restore updated tracking/setup files to KG-20260706-0002 state.

## KG-20260706-0002 - UI Viewport and Dev Setup Docs

Date: 2026-07-06
Timestamp: 2026-07-06 00:38 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: kg-20260706-0002-dev-ui-docs
Change Type: Documentation update

### Summary

Added requirements for the future 3D canvas/viewport, local development setup, and Blender-friendly geometry inspection exports.

### Files Added or Updated

- Updated `MASTER.md`.
- Updated `CHANGELOG.md`.
- Updated `PRE_FLIGHT_Check.md`.
- Updated `DOCS/EXPORT_SPEC.md`.
- Added `DOCS/UI_VIEWPORT_SPEC.md`.
- Added `DOCS/DEV_SETUP.md`.
- Added `HISTORY/2026-07-06_ui_viewport_and_dev_setup.md`.
- Added `DIFFS/KG-20260706-0002_ui_viewport_dev_setup.diff.md`.

### Rollback Notes

Remove the two new spec files, remove the new history/diff records, and restore the updated tracking files to KG-20260706-0001 state.

## KG-20260706-0001 - Initial Project Scaffold

Date: 2026-07-06
Timestamp: 2026-07-06 00:23 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: initial-scaffold
Change Type: Documentation and repository scaffold

### Summary

Created the initial project tracking and specification foundation for KeyGen.

### Files Added or Updated

- Updated `README.md` from initial one-line default into full project README.
- Added `MASTER.md`.
- Added `CHANGELOG.md`.
- Added `PRE_FLIGHT_Check.md`.
- Added `STYLE_KEYS.md`.
- Added `HISTORY/2026-07-06_initial_project_brief.md`.
- Added `DOCS/PRODUCT_SPEC.md`.
- Added `DOCS/GEOMETRY_SPEC.md`.
- Added `DOCS/EXPORT_SPEC.md`.
- Added `DOCS/LANGUAGE_TEXT_SPEC.md`.
- Added `DOCS/PRINTING_SPEC.md`.
- Added `DIFFS/KG-20260706-0001_initial_scaffold.diff.md`.
- Added `ASSETS/README.md`.
- Added `BACKUP_VAULT/README.md`.

### Rollback Notes

Remove the added documentation/scaffold files or restore `README.md` to its original one-line state.
