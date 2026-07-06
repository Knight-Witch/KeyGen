# CHANGELOG

All notable KeyGen changes are tracked here by update instance.

## KG-20260706-0005 - Embeddable App Scaffold

Date: 2026-07-06
Timestamp: 2026-07-06 01:28 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch
Branch: kg-20260706-0005-real-scaffold
Change Type: App scaffold and direct embed prototype

### Summary

Added the first runnable KeyGen embed prototype. The scaffold uses Vite + TypeScript and includes a browser-readable `dist/keygen-app.js` file for direct Fourthwall tester-page embedding.

### Decisions Captured

- First runnable version prioritizes direct embed proof-of-life over geometry generation.
- Initial scaffold uses lean Vite + TypeScript without React to keep the first direct script small.
- The built browser file path is `/dist/keygen-app.js`.
- STL and 3MF buttons are visible but disabled until the geometry core is added.
- Dev JSON download is enabled to validate download behavior from the embedded page.

### Files Added or Updated

- Added `package.json`.
- Added `.gitignore`.
- Added `tsconfig.json`.
- Added `vite.config.ts`.
- Added `index.html`.
- Added `/src/core/keycap/types.ts`.
- Added `/src/core/keycap/defaults.ts`.
- Added `/src/core/keycap/validation.ts`.
- Added `/src/embed/styles.ts`.
- Added `/src/embed/keygen-app.ts`.
- Added `/dist/keygen-app.js`.
- Added `/DOCS/FOURTHWALL_TESTER_SNIPPET.md`.
- Added `/HISTORY/2026-07-06_app_scaffold_embed_prototype.md`.
- Added `/DIFFS/KG-20260706-0005_app_scaffold_embed_prototype.diff.md`.
- Updated `MASTER.md`.
- Updated `CHANGELOG.md`.
- Updated `PRE_FLIGHT_Check.md`.

### Rollback Notes

Rollback can remove the new app/source/dist/doc/history/diff files and restore tracking documents to KG-20260706-0004 state.

### Backup Notes

No backup was created because this is the first app scaffold and not a destructive refactor of existing app source.

## Earlier Changes

Earlier update records remain in repository history and prior changelog versions:

- KG-20260706-0004 - KeyGen Direct jsDelivr Embed Correction.
- KG-20260706-0003 - Hosted Dev Workflow.
- KG-20260706-0002 - UI Viewport and Dev Setup Docs.
- KG-20260706-0001 - Initial Project Scaffold.
