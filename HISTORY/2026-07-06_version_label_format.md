# 2026-07-06 Version Label Format

Update ID: KG-2026-07-06-0008
Timestamp: 2026-07-06 02:24 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Summary

The visible dev build label format was clarified.

## Decision

Use the readable date-separated format:

```text
KG-YYYY-MM-DD-xxxx-label
```

For the current diagnostic build, the visible app label is:

```text
KG-2026-07-06-0006-debug
```

## Files Updated

- dist/keygen-app.js
- src/embed/keygen-app.ts
- DOCS/FOURTHWALL_TESTER_SNIPPET.md
