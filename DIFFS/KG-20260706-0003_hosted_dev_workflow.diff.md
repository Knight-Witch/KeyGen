# Diff Record - KG-20260706-0003 Hosted Dev Workflow

Date: 2026-07-06
Timestamp: 2026-07-06 00:50 America/Los_Angeles
Branch: kg-20260706-0003-hosted-dev-workflow
Change Type: Documentation update

## Summary

Updated project workflow documentation so Amanda's primary test path is a hosted dev/staging page instead of local app setup.

## Files Added

- HISTORY/2026-07-06_hosted_dev_workflow.md
- DIFFS/KG-20260706-0003_hosted_dev_workflow.diff.md

## Files Updated

- MASTER.md
- CHANGELOG.md
- PRE_FLIGHT_Check.md
- DOCS/DEV_SETUP.md

## Functional Code Changes

None.

## App Behavior Changes

None. No application code exists yet.

## Key Decisions Introduced

- Hosted dev/staging page is Amanda's preferred testing workflow.
- Local setup remains fallback/developer workflow only.
- Future app scaffold should support deployment to a hidden or restricted website route.
- Hosted dev build should allow file downloads for Blender and slicer inspection.

## Rollback Plan

Remove added history/diff files and restore updated files to their previous versions.
