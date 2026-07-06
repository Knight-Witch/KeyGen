# Diff Record - KG-20260706-0001 Initial Scaffold

Date: 2026-07-06
Timestamp: 2026-07-06 00:23 America/Los_Angeles
Branch: initial-scaffold
Change Type: Documentation scaffold

## Summary

Initial repository documentation and project tracking scaffold for KeyGen.

## Files Added

```diff
+ CHANGELOG.md
+ MASTER.md
+ PRE_FLIGHT_Check.md
+ STYLE_KEYS.md
+ HISTORY/2026-07-06_initial_project_brief.md
+ DOCS/PRODUCT_SPEC.md
+ DOCS/GEOMETRY_SPEC.md
+ DOCS/EXPORT_SPEC.md
+ DOCS/LANGUAGE_TEXT_SPEC.md
+ DOCS/PRINTING_SPEC.md
+ DIFFS/KG-20260706-0001_initial_scaffold.diff.md
+ ASSETS/.gitkeep
+ BACKUP_VAULT/.gitkeep
```

## Files Updated

```diff
~ README.md
```

## Functional Code Changes

None.

## App Behavior Changes

None. No application code exists yet.

## Key Decisions Introduced

```diff
+ Browser-first parametric CAD generator direction.
+ Internal project name: KeyGen.
+ Brand ownership: Knight Witch / Amanda Ivans.
+ First target keyboard: Redragon K580RGB.
+ MVP key support: 1u letter keys.
+ MVP print process: FDM with 0.2 mm nozzle.
+ First language pair: English primary + Ukrainian secondary.
+ Preferred export: aligned multi-part 3MF.
+ Fallback export: grouped aligned STLs.
+ MVP geometry: opaque shell, semi-translucent diffuser/stem/secondary legend, clear primary legend insert.
```

## Rollback Plan

To rollback this update, restore `README.md` to the prior one-line file and remove all files added in this diff record.
