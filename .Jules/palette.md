## 2025-05-14 - Accessibility of Progression Bars
**Learning:** Progress indicators that use custom styling (like div-based bars) are invisible to screen readers unless they use the `progressbar` role and associated ARIA attributes.
**Action:** Always include `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and a descriptive `aria-label` on custom progress components.

## 2025-05-14 - Build-Blocking Lint Errors in Effects
**Learning:** React 19 and Next.js ESLint rules strictly prevent synchronous `setState` inside `useEffect` to avoid cascading renders. This is common in initialization logic for animations.
**Action:** Wrap initialization `setState` calls in `setTimeout(() => ..., 0)` to defer them to the next tick, satisfying both React and ESLint.
