# Fourthwall Tester Snippet

Update ID: KG-2026-07-06-0009
Last Updated: 2026-07-06 02:42 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This is the small snippet intended for the unlisted Fourthwall tester page.

## Current Test Snippet

Use this while actively testing the prototype:

```html
<div
  id="keygen-app"
  data-keygen-mode="dev"
  style="box-sizing:border-box;min-height:180px;padding:18px;border:1px solid rgba(255,255,255,.22);border-radius:12px;background:#120f18;color:#f4f0ff;font-family:system-ui,sans-serif;">
  KeyGen loading... If this message stays here, the external script did not execute.
</div>
<script
  defer
  src="https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@main/dist/keygen-app.js?v=KG-2026-07-06-0009-calibration">
</script>
```

## Pinned Snippet Pattern

Use a commit-pinned URL when a specific tested build should not change unexpectedly:

```html
<div
  id="keygen-app"
  data-keygen-mode="dev"
  style="box-sizing:border-box;min-height:180px;padding:18px;border:1px solid rgba(255,255,255,.22);border-radius:12px;background:#120f18;color:#f4f0ff;font-family:system-ui,sans-serif;">
  KeyGen loading... If this message stays here, the external script did not execute.
</div>
<script
  defer
  src="https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@COMMIT_SHA/dist/keygen-app.js?v=KG-2026-07-06-0009-calibration">
</script>
```

## Expected Outcomes

- If the full KeyGen UI appears, the script loaded and mounted correctly.
- If the UI shows `KG-2026-07-06-0009-calibration`, the current calibration build loaded.
- If only the loading message appears, Fourthwall rendered the container but did not execute or could not load the external script.
- If a red KeyGen error box appears, the script executed but could not mount correctly.
- If nothing appears at all, the Fourthwall block itself is not rendering the HTML snippet.

## Notes

- The script auto-mounts into `#keygen-app`.
- The calibration STL export is active.
- The first calibration STL is a rough physical fit-test model, not the final three-part legend/diffuser geometry.
- 3MF export remains disabled until the geometry core is more complete.
