## 2026-01-27 - [Accessibility] Skip to Content Link and Header Navigation
**Learning:** In a landing page with complex animations (like WarpIntro) and multiple sections, a "Skip to Content" link is essential for keyboard users. The logo should always be a link to the home page for standard UX expectations.
**Action:** Always implement a focusable "Skip to Content" link targeting 'id="main-content"' and wrap the logo in a 'next/link'. Ensure full-page overlays like WarpIntro provide a skip button that can be easily located by screen readers.
