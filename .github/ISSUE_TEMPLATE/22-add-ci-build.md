---
name: Add CI build workflow
about: Run npm ci and build on PRs
title: Add CI build workflow
labels: ["ci"]
assignees: []
---

Create a GitHub Actions workflow to run `npm ci` and `npm run build` on PRs against main.

Acceptance criteria:
- Workflow file in `.github/workflows/ci-build.yml`
- PRs show build status
