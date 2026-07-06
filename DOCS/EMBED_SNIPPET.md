# Embed Snippet

Update ID: KG-20260706-0005
Last Updated: 2026-07-06 01:25 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This document gives the Fourthwall tester-page snippet for the first KeyGen embed scaffold.

## Current Test Snippet

Use this on an unlisted Fourthwall tester page after KG-20260706-0005 is merged to `main`:

```html
<div id="keygen-app" data-keygen-mode="dev"></div>
<script
  defer
  src="https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@main/dist/keygen-app.js?v=KG-20260706-0005-dev">
</script>
```

## Pinned Commit Snippet

After merge, prefer replacing `main` with the final merge commit SHA for cache-stable testing:

```html
<div id="keygen-app" data-keygen-mode="dev"></div>
<script
  defer
  src="https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@MERGE_COMMIT_SHA/dist/keygen-app.js?v=KG-20260706-0005-dev">
</script>
```

## Expected Behavior

The snippet should mount a KeyGen prototype UI inside the Fourthwall HTML block.

The first prototype supports:

- Primary legend text input.
- Secondary legend text input.
- A stylized 1u keycap preview placeholder.
- A downloadable dev spec JSON file.
- Disabled STL and 3MF export buttons until the geometry core is added.

## Notes

This is a deployment-path prototype, not the final geometry generator.
