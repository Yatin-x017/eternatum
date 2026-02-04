## 2024-05-22 - [Accessibility: Skip-to-content and Navigation]
**Learning:** For apps with heavy initial animations or complex headers, a "Skip to content" link is essential for keyboard accessibility. Page-level components must provide a focusable target with `id="main-content"` and `tabIndex={-1}` to handle focus correctly without jarring visual outlines.
**Action:** Always include a skip link in `layout.tsx` and a corresponding target in the main page content.

## 2024-05-22 - [Accessibility: Progress Bars]
**Learning:** Decorative progress bars (like completion bars) are often missed by screen readers if they lack semantic ARIA attributes.
**Action:** Ensure all progress indicators have `role="progressbar"`, `aria-valuenow`, and a descriptive `aria-label`.
