## 2024-05-22 - [Accessibility] Added Skip to Content Link
**Learning:** The preferred accessibility pattern for skipping navigation in this app is a focusable 'Skip to Content' link at the top of the page targeting a main content element with `id="main-content"` and `tabIndex={-1}`. This is crucial for arcade-style themes where the header can be dense.
**Action:** Always ensure new pages have a clear main content target and the root layout provides a skip link.

## 2024-05-22 - [React] useEffect and setState
**Learning:** ESLint prevents synchronous `setState` calls within `useEffect` in this project. This is especially common in animation/background components that initialize state based on window size.
**Action:** Wrap initialization updates in a `setTimeout(() => ..., 0)` or use functional state updates to satisfy the `react-hooks/set-state-in-effect` rule.
