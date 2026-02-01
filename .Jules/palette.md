# Palette's UX Journal

## 2026-02-01 - Accessibility & Animation Performance
**Learning:** Progress bars and completion indicators must include semantic ARIA attributes (role="progressbar", aria-valuenow, etc.) to ensure screen reader users can understand progress. Additionally, in React 19 / Next.js environments, synchronous setState calls within useEffect can trigger cascading renders and ESLint errors; wrapping these in a setTimeout(() => ..., 0) resolves the lint issue while maintaining the intended initialization/completion logic for animations.
**Action:** Always include ARIA roles for custom progress indicators. Use the setTimeout pattern for side-effect-heavy state updates in animation components to maintain performance and build stability.
