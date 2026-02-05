## 2025-05-14 - [State Update Patterns in Animations]
**Learning:** In high-frequency animation components (like those using `useGameLoop`), synchronous `setState` in `useEffect` (e.g., for initialization) triggers ESLint errors in this project's configuration.
**Action:** Wrap such state initializations in a `setTimeout(() => ..., 0)` to defer the update and avoid cascading renders.
