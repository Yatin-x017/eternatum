## 2025-05-14 - Progress Bar Accessibility and Linting Compliance
**Learning:** Progress indicators in the "Learn by Building" section were missing critical ARIA attributes (role="progressbar", aria-valuenow, etc.), making them inaccessible to screen readers. Additionally, the project's strict ESLint rules (react-hooks/set-state-in-effect) require asynchronous state updates in useEffect for animation-heavy components.
**Action:** Always verify custom UI components against ARIA standards and ensure pnpm lint passes before submission to adhere to both accessibility and quality standards.
