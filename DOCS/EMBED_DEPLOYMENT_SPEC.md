# Embed Deployment Spec

Update ID: KG-20260706-0004
Last Updated: 2026-07-06 01:08 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This document defines the intended hosted testing/deployment model for KeyGen when used on a Fourthwall test page.

Fourthwall should not host the full app source directly. The page should only need a small HTML snippet that points to a built KeyGen script served through jsDelivr from the KeyGen repository.

## Critical Boundary

KeyGen must not touch or depend on the Knight Witch website/widget repository.

Do not publish KeyGen files into `Knight-Witch/kw-site-widgets`.

Do not modify the website global footer loader for KeyGen.

Do not treat KeyGen as a normal Knight Witch site widget.

The prior carousel/widget setup is only an example of the embed pattern: a small Fourthwall snippet points at externally hosted code. KeyGen should use the same simple embed idea, but it must remain owned by and served from the KeyGen project path.

## Preferred Fourthwall Testing Model

Amanda's preferred test workflow:

1. Create an unlisted Fourthwall tester page.
2. Paste a small HTML snippet into the Fourthwall HTML/embed box.
3. The snippet loads the KeyGen JavaScript bundle from jsDelivr using a `cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@...` URL.
4. The app mounts into a specific container on the Fourthwall page.
5. Amanda tests the app in-browser and downloads generated files for Blender/slicer inspection.
6. On each update, the snippet can be updated to a new pinned commit/version path if needed.

## Direct Embed Snippet Shape

The tester page should eventually need only a small direct snippet similar to:

```html
<div id="keygen-app" data-keygen-mode="dev"></div>
<script
  defer
  src="https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@COMMIT_OR_VERSION/dist/keygen-app.js?v=VERSION_LABEL">
</script>
```

Exact paths are TBD and depend on the app scaffold/build output.

## Publishing Model

The KeyGen source and built browser bundle should live in the KeyGen repository unless a later deployment constraint forces a separate KeyGen-only public deploy repository.

Allowed deployment paths:

- `Knight-Witch/KeyGen` with a committed built bundle that jsDelivr can load.
- A future KeyGen-only deploy repository if source privacy requires separating public browser assets from private source.

Disallowed deployment paths:

- `Knight-Witch/kw-site-widgets`.
- Knight Witch website global loader files.
- Product carousel/widget architecture.
- Any unrelated website codebase.

## App Bundle Requirements

The dev bundle should be embeddable and self-contained enough to run inside a normal Fourthwall HTML block.

Requirements:

- Mount into a known container element.
- Avoid assuming full-page ownership unless explicitly configured.
- Avoid global CSS collisions with Fourthwall page styling.
- Namespace CSS classes and root variables.
- Load required assets from stable paths relative to the KeyGen bundle or stable absolute URLs.
- Support a dev/test mode flag.
- Generate downloadable exports client-side when possible.
- Fail visibly if required assets cannot load.

## Runtime Shape

The app should expose a small mount initializer internally, even if the first implementation auto-mounts.

Potential future shape:

```js
window.KeyGen.mount({
  target: '#keygen-app',
  mode: 'dev'
});
```

A direct script auto-mount is acceptable for the first tester page if it keeps the Fourthwall snippet simple.

## Repository Visibility Constraint

A browser-loaded jsDelivr URL needs to point at files the browser can read. If the KeyGen repository remains private, a direct jsDelivr URL to that private repo may not work for the tester page.

If that becomes a blocker, use a KeyGen-only public deploy repository containing only built browser assets. Do not use the Knight Witch website/widget repo as the workaround.

## Open Questions

- Whether `Knight-Witch/KeyGen` should be public or whether a KeyGen-only public deploy repo should hold built assets.
- Final built file path, likely under `/dist/` or `/embed/`.
- Final Fourthwall tester page URL.
- Whether the dev page needs password protection or unlisted access is enough.
- Whether KeyGen should be bundled as one JS file or JS plus CSS.

## Notes

The app scaffold should be built with embeddability in mind from the beginning. The root component should not assume it controls the entire page, and styling must be contained to the KeyGen root whenever possible.
