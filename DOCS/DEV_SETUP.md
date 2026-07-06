# Dev Setup

Update ID: KG-20260706-0002
Last Updated: 2026-07-06 00:38 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Current State

The repository currently contains documentation only. There is no runnable app until the app scaffold is added.

After the app scaffold exists, the local workflow should let Amanda clone the repo, install dependencies, run a local dev server, view the app in a browser, and export geometry for slicer or Blender inspection.

## Intended Local Workflow

Expected future workflow:

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

- GitHub Desktop or Git CLI.
- VS Code or preferred code editor.
- Node.js LTS.
- npm initially, unless the project later standardizes on pnpm.
- Blender for geometry inspection.
- Bambu Studio or target slicer for print validation.

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

Local testing should support:

- Browser UI access.
- Live reload while code changes.
- 3D viewport testing.
- Geometry generation test buttons.
- Export buttons for STL, 3MF, and dev inspection formats.
- Clear test fixtures for Redragon K580RGB 1u keys.

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

This document should be updated when the app scaffold is added and the exact package manager, install command, and dev scripts are finalized.
