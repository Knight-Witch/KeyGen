# Fourthwall Tester Snippet

Update ID: KG-20260706-0005
Last Updated: 2026-07-06 01:28 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This is the small snippet intended for the unlisted Fourthwall tester page.

## Main-Branch Test Snippet

Use this while actively testing the prototype:

```html
<div id="keygen-app" data-keygen-mode="dev"></div>
<script
  defer
  src="https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@main/dist/keygen-app.js?v=KG-20260706-0005-dev">
</script>
```

## Pinned Snippet Pattern

Use a commit-pinned URL when a specific tested build should not change unexpectedly:

```html
<div id="keygen-app" data-keygen-mode="dev"></div>
<script
  defer
  src="https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@COMMIT_SHA/dist/keygen-app.js?v=VERSION_LABEL">
</script>
```

## Notes

- The script auto-mounts into `#keygen-app`.
- The first prototype renders a UI shell and keycap preview only.
- STL and 3MF export buttons are disabled until the geometry core is added.
- The dev JSON export is active and is intended to verify download behavior from the embedded page.
