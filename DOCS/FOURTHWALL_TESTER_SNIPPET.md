# Fourthwall Tester Snippet

Update ID: KG-2026-07-06-0008
Last Updated: 2026-07-06 02:24 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This is the small snippet intended for the unlisted Fourthwall tester page.

## Diagnostic Test Snippet

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
  src="https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@main/dist/keygen-app.js?v=KG-2026-07-06-0006-debug">
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
  src="https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@COMMIT_SHA/dist/keygen-app.js?v=KG-2026-07-06-0006-debug">
</script>
```

## Expected Outcomes

- If the full KeyGen UI appears, the script loaded and mounted correctly.
- If only the loading message appears, Fourthwall rendered the container but did not execute or could not load the external script.
- If a red KeyGen error box appears, the script executed but could not mount correctly.
- If nothing appears at all, the Fourthwall block itself is not rendering the HTML snippet.

## Notes

- The script auto-mounts into `#keygen-app`.
- The first prototype renders a UI shell and keycap preview only.
- STL and 3MF export buttons are disabled until the geometry core is added.
- The dev JSON export is active and is intended to verify download behavior from the embedded page.
