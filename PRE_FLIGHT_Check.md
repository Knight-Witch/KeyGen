# PRE_FLIGHT_Check

Rolling pre-flight review log for KeyGen.

## KG-2026-07-06-0009 - Calibration STL Prototype

Date: 2026-07-06
Timestamp: 2026-07-06 02:42 America/Los_Angeles
Branch: main
Scope: First rough Redragon K580RGB 1u calibration STL generator and Fourthwall download button.

### Review

Existing history, MASTER, package setup, embed source, served bundle, and tester snippet were reviewed before this update.

### Findings

- Fourthwall embed loading has been validated.
- No prior geometry generation modules existed.
- The next roadmap item is Phase 1 geometry validation.
- A rough calibration STL is the safest first physical test before final three-part legend/diffuser geometry.
- This update is additive and does not require a repository backup.

### Recommendation

Add standalone STL utilities and a provisional Redragon K580RGB 1u calibration model. Enable a calibration STL download in the hosted tester page and defer final manufacturing geometry until import/print feedback is available.

### Action Taken

Added STL utilities, a calibration keycap model, calibration documentation, source UI wiring, the served browser bundle, and updated the tester snippet.

## KG-2026-07-06-0008 - Version Label Format

Date: 2026-07-06
Timestamp: 2026-07-06 02:24 America/Los_Angeles
Branch: main
Scope: Visible dev build label syntax update.

### Review

The active served bundle, source constant, and Fourthwall tester snippet were reviewed before the label update.

### Findings

- The visible build label was readable but the compact date segment was not ideal.
- The current diagnostic build should keep the same semantic version identity while making the date easier to parse.
- This update changes labels and cache-busting text only.
- No backup is required.

### Recommendation

Use `KG-YYYY-MM-DD-xxxx-label` for visible dev build labels.

### Action Taken

Updated the active bundle, source constant, tester snippet, history record, and diff record to use `KG-2026-07-06-0006-debug`.

## KG-20260706-0006 - Embed Diagnostics

Date: 2026-07-06
Timestamp: 2026-07-06 02:05 America/Los_Angeles
Branch: main
Scope: Diagnostic patch for Fourthwall embed loading failure.

### Review

The first Fourthwall test showed no visible output. Existing embed docs and the committed browser bundle were reviewed.

### Findings

- The original tester snippet used an empty `#keygen-app` container, so any script load failure appeared as a blank page.
- The original bundle had console warnings but no visible on-page diagnostics.
- The served browser file is `/dist/keygen-app.js`.
- This update is a small diagnostic patch and does not require a repository backup.

### Recommendation

Add visible fallback content to the snippet and visible diagnostics to the served browser bundle before continuing geometry work.

### Action Taken

Updated the browser bundle and tester snippet documentation with visible loading, mount, and error diagnostics.

## KG-20260706-0005 - Embeddable App Scaffold

Date: 2026-07-06
Timestamp: 2026-07-06 01:28 America/Los_Angeles
Branch: kg-20260706-0005-app
Scope: First app scaffold and direct Fourthwall embed prototype.

### Review

Existing project history and docs were reviewed before this update.

### Findings

- No app source code, package manifest, build config, or existing frontend modules were present before this update.
- The repo is now public, so direct jsDelivr loading from the KeyGen repo path is viable.
- The first scaffold should prove the Fourthwall embed path before geometry generation is added.
- A lean Vite + TypeScript scaffold is sufficient for the first direct embed proof-of-life.
- No major refactor or destructive code change is involved.

### Recommendation

Proceed with first app scaffold. Add a small embeddable UI shell, committed browser bundle, local preview page, and tester-page snippet documentation. Defer real geometry/export code to the next phase after Fourthwall embed behavior is validated.

### Action Taken

Added the first KeyGen app scaffold, direct browser bundle, prototype controls, keycap preview placeholder, dev JSON download, and project tracking records.

## KG-20260706-0004 - Direct jsDelivr Embed Correction

Date: 2026-07-06
Timestamp: 2026-07-06 01:08 America/Los_Angeles
Scope: Documentation correction for direct KeyGen jsDelivr embed deployment.

### Review

Existing project documents and history were reviewed before this correction.

### Findings

- Prior docs incorrectly implied that KeyGen could publish through shared site infrastructure.
- The intended workflow is a direct tester-page embed that points to the KeyGen project path through jsDelivr.
- No application source code exists yet.
- No deployment pipeline exists yet.
- This update is documentation-only and does not require a repository backup.

### Recommendation

Correct the deployment docs so KeyGen remains separate and uses a direct jsDelivr embed from the KeyGen repo path, or a KeyGen-only deploy repo if public asset separation becomes necessary.

### Action Taken

Updated deployment/setup documentation and added a history/diff record for the correction.

## KG-20260706-0003 - Hosted Dev Workflow

Date: 2026-07-06
Timestamp: 2026-07-06 00:55 America/Los_Angeles
Branch: kg-20260706-0003-hosted-dev-workflow
Scope: Documentation update for hosted tester-page workflow and embed deployment notes.

### Review

Existing project documents and history were reviewed before this update.

### Findings

- No application source code exists yet.
- No deployment pipeline exists yet.
- No code modules or build scripts exist to conflict with.
- This update is documentation-only and does not require a repository backup.

### Recommendation

Proceed with documentation update. Hosted tester-page access should be the primary user testing workflow, while local setup remains a developer fallback.

### Action Taken

Updated setup and tracking docs to capture the hosted tester-page workflow and embeddable bundle direction.

## KG-20260706-0002 - UI Viewport and Dev Setup Docs

Date: 2026-07-06
Timestamp: 2026-07-06 00:38 America/Los_Angeles
Branch: kg-20260706-0002-dev-ui-docs
Scope: Documentation update for viewport behavior, Blender inspection workflow, and local development setup.

### Review

Existing project documents were reviewed before this update.

### Findings

- `MASTER.md` already tracks Phase 2 browser preview and editing UI.
- `DOCS/EXPORT_SPEC.md` already requires aligned 3MF and grouped STL exports.
- No app source code exists yet.
- No code modules, build scripts, package files, or UI components exist to conflict with.
- This update is documentation-only and does not require a repository backup.

### Recommendation

Proceed with documentation update. Add explicit requirements for 3D viewport controls, canvas input behavior, Blender inspection exports, and local dev setup.

### Action Taken

Added and updated documentation to capture the new UI/dev workflow requirements.

## KG-20260706-0001 - Initial Project Scaffold

Date: 2026-07-06
Timestamp: 2026-07-06 00:23 America/Los_Angeles
Branch: initial-scaffold
Scope: Initial documentation and repository scaffold.

### Review

The repository was checked before scaffold work began.

### Findings

- Repository exists and is private.
- Repository access is available.
- Default branch is `main`.
- The repository had no app code.
- A default one-line `README.md` existed and was updated instead of duplicated.
- No `/HISTORY/` directory existed yet.
- No `CHANGELOG.md` existed yet.
- No `MASTER.md` existed yet.
- No `STYLE_KEYS.md` existed yet.
- No `PRE_FLIGHT_Check.md` existed yet.
- No source modules, assets, exports, or app architecture existed to conflict with.

### Recommendation

Proceed with documentation scaffold only. No backup required because there is no existing app code and no destructive refactor.

### Action Taken

Created the initial tracking and specification documents. Preserved `KeyGen` as the internal project name and Knight Witch / Amanda Ivans as the project ownership identity.
