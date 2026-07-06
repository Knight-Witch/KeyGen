# Dev Setup

Update ID: KG-20260706-0004
Last Updated: 2026-07-06 01:08 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Current State

The repository currently contains documentation only. There is no runnable app until the app scaffold is added.

## Primary Testing Workflow

Amanda's preferred workflow is a hosted Fourthwall tester page, not a local developer setup.

The KeyGen testing workflow should be a direct embed from the KeyGen repository:

1. Code updates are made in the KeyGen GitHub repo.
2. The KeyGen app is built into static JavaScript/CSS assets inside the KeyGen project path.
3. Amanda creates or opens an unlisted Fourthwall tester page.
4. Amanda pastes a small HTML snippet into the Fourthwall HTML/embed box.
5. The snippet loads the KeyGen bundle using a `cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@...` URL.
6. Amanda tests the UI, viewport, key generation, and exports in the browser.
7. Amanda downloads generated files for Blender or slicer inspection.
8. Feedback is sent back as notes, screenshots, Blender edits, or print-test results.

## Explicit Non-Goal

KeyGen must not be published through `Knight-Witch/kw-site-widgets`.

KeyGen must not modify Knight Witch website code, the website global footer loader, storefront product carousel code, or any unrelated website/widget architecture.

The Fourthwall carousel/widget system is only a reference for the embed pattern. It is not the deployment target.

## Hosted Dev Page Goal

The app should eventually be available through a Fourthwall unlisted tester page using a small direct embed snippet.

Potential route/page examples:

```text
/keygen-dev
/keygen-test
/tools/keygen-test
```

The final route depends on the Fourthwall page setup.

Access should be hidden or restricted if possible. The dev page is for testing and should not be treated as the public product page.

## Fourthwall Embed Goal

The Fourthwall page should only need a small snippet with a root container and a script tag that loads the KeyGen app bundle from jsDelivr.

Conceptual snippet:

```html
<div id="keygen-app" data-keygen-mode="dev"></div>
<script
  defer
  src="https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@COMMIT_OR_VERSION/dist/keygen-app.js?v=VERSION_LABEL">
</script>
```

Exact file paths are TBD.

The app bundle must be designed to mount into a container rather than assuming it controls the full page.

## Local Developer Workflow

Local setup remains useful for direct debugging, but it is not Amanda's required testing path.

Future local workflow:

```bash
git clone https://github.com/Knight-Witch/KeyGen.git
cd KeyGen
npm install
npm run dev
```

Then open the local development URL printed by the dev server, expected to be:

```text
http://localhost:5173
```

## Recommended Local Tools

For Amanda's testing workflow:

- Browser for the hosted tester page.
- Blender for geometry inspection.
- Bambu Studio or target slicer for print validation.

For developer/local source work:

- Git CLI or GitHub Desktop.
- VS Code or preferred code editor.
- Node.js LTS.
- npm initially, unless the project later standardizes on pnpm.

## Planned Scripts

When the app scaffold is created, define scripts similar to:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  }
}
```

## Development Access Goal

Hosted dev testing should support:

- Browser UI access.
- 3D viewport testing.
- Geometry generation test buttons.
- Export buttons for STL, 3MF, and dev inspection formats.
- Clear test fixtures for Redragon K580RGB 1u keys.
- Downloadable exports for Blender and slicer inspection.

Local development should support the same features plus live reload while source code changes.

## Dev Fixture Goal

The first runnable app should include a dev fixture that generates a simple 1u test keycap without requiring the full UI to be finished.

Minimum useful fixture:

- One hardcoded keycap target.
- One primary legend.
- One secondary legend.
- Generate shell preview.
- Generate diffuser/stem/secondary preview.
- Generate primary legend insert preview.
- Export individual STL files.
- Export Blender inspection file if available.

## Notes

This document should be updated when the app scaffold is added, the build output path is known, and the exact Fourthwall tester page route is selected.
