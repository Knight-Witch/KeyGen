# Diff Record - KG-20260706-0004 KeyGen Direct jsDelivr Embed

Date: 2026-07-06
Timestamp: 2026-07-06 01:08 America/Los_Angeles
Change Type: Documentation correction

## Summary

Corrected the hosted test deployment direction. KeyGen should use a direct jsDelivr embed from the KeyGen project path, not shared website/widget infrastructure.

## Files Added

- HISTORY/2026-07-06_keygen_direct_jsdelivr_embed.md
- DIFFS/KG-20260706-0004_keygen_direct_jsdelivr_embed.diff.md

## Files Updated

- MASTER.md
- DOCS/EMBED_DEPLOYMENT_SPEC.md
- DOCS/DEV_SETUP.md
- CHANGELOG.md
- PRE_FLIGHT_Check.md

## Functional Code Changes

None.

## Key Decisions Introduced

- Fourthwall tester page should load KeyGen directly through a simple script tag.
- The script source should follow the jsDelivr GitHub URL pattern for the KeyGen repository.
- KeyGen should remain a separate project from the website/widget carousel system.
- If a public browser-readable file is required, use the KeyGen repo or a KeyGen-only deploy repo.

## Operational Note

During this correction, temporary placeholder files were accidentally created and immediately removed from `main`. They leave no final file diff.

## Rollback Plan

Restore updated docs to KG-20260706-0003 state and remove the KG-20260706-0004 history/diff files.
