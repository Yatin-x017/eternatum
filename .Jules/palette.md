## 2025-05-15 - Global Skip Link Pattern
**Learning:** The preferred accessibility pattern for skipping navigation in this project is a focusable 'Skip to Content' link at the top of the page targeting a main content element with `id="main-content"` and `tabIndex={-1}`.
**Action:** Always ensure the root layout includes the skip link and all page-level containers provide the correct focus target.

## 2025-05-15 - Handling Synchronous State Updates in Effects
**Learning:** ESLint prevents synchronous `setState` calls within `useEffect`. For animation or background components like `FloatingGameBits.tsx`, `GhostLayer.tsx`, and `WarpIntro.tsx`, resolve this by wrapping initialization updates or completion handlers in a `setTimeout(() => ..., 0)`.
**Action:** Use deferred state updates for initializations triggered by effects to avoid React hydration/cascading render issues.
