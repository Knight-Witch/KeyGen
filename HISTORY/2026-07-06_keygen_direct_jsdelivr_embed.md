# 2026-07-06 KeyGen Direct jsDelivr Embed

Update ID: KG-20260706-0004
Timestamp: 2026-07-06 01:08 America/Los_Angeles
Owner: Amanda Ivans / Knight Witch

## Summary

The KeyGen hosted testing model was corrected.

## Decision

The Fourthwall tester page should use a simple direct embed snippet that points to a built KeyGen script through jsDelivr.

Example path pattern:

```text
https://cdn.jsdelivr.net/gh/Knight-Witch/KeyGen@COMMIT_OR_VERSION/dist/keygen-app.js?v=VERSION_LABEL
```

## Boundary

KeyGen is a separate tool. The website/widget carousel system was only an example of a small-snippet loader pattern.

## Constraint

If direct jsDelivr loading from KeyGen requires public access to the built file, choose either public KeyGen or a KeyGen-only public deploy repo.
