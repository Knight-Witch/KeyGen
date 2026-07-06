# 2026-07-06 Hosted Dev Workflow

Update ID: KG-20260706-0003
Timestamp: 2026-07-06 00:55 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Summary

The preferred testing workflow was clarified. Amanda should test KeyGen through a hosted Fourthwall dev/staging page rather than needing to clone and run the app locally.

## Decision

The main workflow should be:

1. Code updates are made through GitHub.
2. A dev build is deployed to the website/widget static host.
3. Amanda opens an unlisted Fourthwall tester page.
4. The Fourthwall page uses a small HTML/embed snippet to load KeyGen.
5. Amanda tests UI behavior, viewport behavior, geometry generation, and exports.
6. Amanda downloads generated files for Blender and slicer inspection.
7. Feedback is returned through notes, screenshots, Blender edits, or print-test results.

## Fourthwall Embed Model

Fourthwall should only hold a small snippet. The real KeyGen app bundle should live in the website/widget static asset location.

The app must be structured so it can mount into a specific container on the page without taking over the entire Fourthwall page.

## Local Setup Role

Local setup remains useful for developers and direct debugging, but it should not be Amanda's required workflow for testing the app.

## Open Item

The actual hosted dev route, static asset path, and website/widget repo name are still TBD.
