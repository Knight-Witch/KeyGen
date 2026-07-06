# Dev Setup

Update ID: KG-20260706-0003
Last Updated: 2026-07-06 00:50 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Current State

The repository currently contains documentation only. There is no runnable app until the app scaffold is added.

## Primary Testing Workflow

Amanda's preferred workflow is a hosted dev/staging page, not a local developer setup.

The intended project workflow is:

1. Code updates are made in GitHub.
2. The app build is deployed to a private or hidden dev page.
3. Amanda opens the dev page in a browser.
4. Amanda tests the UI, viewport, key generation, and exports.
5. Amanda downloads generated files for Blender or slicer inspection.
6. Feedback is sent back as notes, screenshots, Blender edits, or print-test results.

This matches the existing project workflow pattern where GitHub updates are handled centrally and Amanda tests the result through an accessible web page.

## Hosted Dev Page Goal

The app should eventually be available at a private or hidden staging URL such as:

```text
/dev/keygen
/keygen-dev
/tools/keygen-dev
```

The final route depends on the website deployment environment.

Access should be hidden or restricted if possible. The dev page is for testing and should not be treated as the public product page.

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

This document should be updated when the app scaffold is added, the deployment path is known, and the exact website dev route is selected.
