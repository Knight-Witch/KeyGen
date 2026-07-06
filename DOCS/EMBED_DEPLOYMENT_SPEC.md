# Embed Deployment Spec

Update ID: KG-20260706-0003
Last Updated: 2026-07-06 00:55 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Purpose

This document defines the intended hosted testing/deployment model for KeyGen when used with Fourthwall pages.

Fourthwall should not need to host the full app source directly. The page should only need a small HTML snippet that mounts KeyGen and loads the actual app bundle from an external static asset location.

## Preferred Fourthwall Testing Model

Amanda's preferred test workflow:

1. Create an unlisted Fourthwall tester page.
2. Paste a small HTML snippet into the Fourthwall HTML/embed box.
3. The snippet loads KeyGen JavaScript and CSS from the static asset host.
4. The app mounts into a specific container on the Fourthwall page.
5. Amanda tests the app in-browser and downloads generated files for Blender/slicer inspection.

## Embed Snippet Shape

The eventual embed should look conceptually like this:

```html
<div id="keygen-app" data-keygen-mode="dev"></div>
<script type="module" src="https://STATIC_ASSET_HOST/keygen/keygen-app.js"></script>
```

Exact URLs are TBD and depend on the website/widget hosting repo and deployment target.

## App Bundle Requirements

The production/dev bundle should be embeddable and self-contained enough to run inside a normal Fourthwall HTML block.

Requirements:

- Mount into a known container element.
- Avoid assuming full-page ownership unless explicitly configured.
- Avoid global CSS collisions with Fourthwall page styling.
- Namespace CSS classes and root variables.
- Load required assets from stable absolute URLs.
- Support a dev/test mode flag.
- Generate downloadable exports client-side when possible.
- Fail visibly if required assets cannot load.

## Recommended Runtime Shape

The app should expose a small mount initializer internally, even if the first implementation auto-mounts.

Potential future shape:

```js
window.KeyGen.mount({
  target: '#keygen-app',
  mode: 'dev'
});
```

A module-based auto-mount is acceptable for the first embed if it keeps the Fourthwall snippet simple.

## Hosting Constraint

If the code/assets live in a private GitHub repo, the Fourthwall page cannot safely load them directly for normal visitors unless the assets are deployed somewhere publicly readable or served through a controlled static host.

The likely solution is to publish built static assets to the existing website/widget hosting repo or another static asset host used for Knight Witch web widgets.

The source repo can remain private while the built bundle is published to a deployable/static location.

## Open Questions

- Exact existing website/widget repo name.
- Existing static asset host or deployment flow.
- Final Fourthwall dev page URL.
- Whether the dev page needs password protection or unlisted access is enough.
- Whether KeyGen should be bundled as one JS/CSS pair or split chunks.

## Notes

The app scaffold should be built with embeddability in mind from the beginning. The root component should not assume it controls the entire page, and styling must be contained to the KeyGen root whenever possible.
