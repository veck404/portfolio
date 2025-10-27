---
globs: src/**/*.{ts,tsx,jsx,js}
description: Prevents broken images on some devices due to browsers selecting
  non-existent candidates from srcset.
alwaysApply: false
---

When using <picture> and srcset, reference only asset variants that actually exist in public/assets, and ensure sizes matches available candidates. Avoid listing non-existent files (e.g., 800w AVIF if only 400w exists).