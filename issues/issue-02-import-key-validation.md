---
title: Add private key validation for import
labels: ["good first issue", "frontend"]
assignees: []
---

Improve the import flow to validate the provided private key format and show clear error messages for invalid input.

Acceptance criteria:
- Reject non-hex or incorrectly sized keys with a user-friendly message
- Provide example format in the input prompt
- Add unit/manual test instructions
