# 2026-07-06 Hosted Dev Workflow

Update ID: KG-20260706-0003
Timestamp: 2026-07-06 00:50 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Summary

The preferred testing workflow was clarified. Amanda should test KeyGen through a hosted dev/staging page rather than needing to clone and run the app locally.

## Decision

The main workflow should be:

1. Code updates are made through GitHub.
2. A dev build is deployed to a hidden or restricted website route.
3. Amanda opens the dev page in a normal browser.
4. Amanda tests UI behavior, viewport behavior, geometry generation, and exports.
5. Amanda downloads generated files for Blender and slicer inspection.
6. Feedback is returned through notes, screenshots, Blender edits, or print-test results.

## Local Setup Role

Local setup remains useful for developers and direct debugging, but it should not be Amanda's required workflow for testing the app.

## Open Item

The actual hosted dev route is still TBD and depends on the website deployment environment.
