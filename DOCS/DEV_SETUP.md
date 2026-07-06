# Dev Setup

Update ID: KG-20260706-0003
Last Updated: 2026-07-06 00:55 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Current State

The repository currently contains documentation only. There is no runnable app until the app scaffold is added.

## Primary Testing Workflow

Amanda's preferred workflow is a hosted dev/staging page, not a local developer setup.

Because the website is hosted through Fourthwall, the preferred model is an embeddable app bundle:

1. Code updates are made in GitHub.
2. The KeyGen app is built into static JavaScript/CSS assets.
3. The built assets are published to the existing website/widget static host or repo.
4. Amanda creates or opens an unlisted Fourthwall tester page.
5. Amanda pastes a small HTML snippet into the Fourthwall HTML/embed box.
6. The snippet loads the real KeyGen bundle from the external static asset location.
7. Amanda tests the UI, viewport, key generation, and exports in the browser.
8. Amanda downloads generated files for Blender or slicer inspection.
9. Feedback is sent back as notes, screenshots, Blender edits, or print-test results.

This matches the existing project workflow pattern where GitHub updates are handled centrally and Amanda tests the result through an accessible web page.

## Hosted Dev Page Goal

The app should eventually be available through a Fourthwall unlisted tester page using a small embed snippet.

Potential route/page examples:

```text
/dev/keygen
/keygen-dev
/tools/keygen-dev
```

The final route depends on the website deployment environment.

Access should be hidden or restricted if possible. The dev page is for testing and should not be treated as the public product page.

## Fourthwall Embed Goal

The Fourthwall page should only need a small snippet with a root container and a script tag that loads the KeyGen app bundle from the static asset host.

Exact URLs are TBD.

The app bundle must be designed to mount into a container rather than assuming it controls the full page.

## Local Developer Workflow

Local setup remains useful for code contributors or emergency debugging, but it is not Amanda's required testing path.

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

- Browser for the hosted dev page.
- Blender for geometry inspection.
- Bambu Studio or target slicer for print validation.

For developer/local source work:

- GitHub Desktop or Git CLI.
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

This document should be updated when the app scaffold is added, the deployment path is known, the exact website/widget hosting repo is identified, and the exact Fourthwall tester page route is selected.
