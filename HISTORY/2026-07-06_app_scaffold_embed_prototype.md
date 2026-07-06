# 2026-07-06 App Scaffold Embed Prototype

Update ID: KG-20260706-0005
Timestamp: 2026-07-06 01:28 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Summary

The first runnable KeyGen app scaffold was added.

## Scope

This update creates a small direct-embed prototype for Fourthwall testing.

## Implementation

- Vite and TypeScript scaffold.
- Local preview page.
- Source entry under `src/embed/`.
- Browser bundle under `dist/`.
- Prototype UI for primary and secondary legends.
- Placeholder keycap preview.
- Dev JSON export button.

## Decision

The first scaffold intentionally does not include real CAD geometry. The immediate objective is to validate embed loading, scoped styling, and basic UI/download behavior.

## Next Step

Test the Fourthwall embed snippet. After it mounts correctly, start the actual 1u geometry generator core.
