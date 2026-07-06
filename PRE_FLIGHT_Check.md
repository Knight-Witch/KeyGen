# PRE_FLIGHT_Check

Rolling pre-flight review log for KeyGen.

## KG-20260706-0004 - Direct jsDelivr Embed Correction

Date: 2026-07-06
Timestamp: 2026-07-06 01:08 America/Los_Angeles
Scope: Documentation correction for direct KeyGen jsDelivr embed deployment.

### Review

Existing project documents and history were reviewed before this correction.

### Findings

- Prior docs incorrectly implied that KeyGen could publish through shared website/widget infrastructure.
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
