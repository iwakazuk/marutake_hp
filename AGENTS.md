# Repository Guidelines

## Project Structure & Module Organization
- `src/`: React + TypeScript app.
  - `pages/<route>/page.tsx`: route pages (lazy‑loaded via React Router).
  - `components/feature/*`: shared UI components.
  - `router/`: route objects and `<AppRoutes />`.
  - `i18n/`: i18next setup; translations auto‑loaded from `src/i18n/local/<lang>/*.ts`.
- Root configs: `vite.config.ts` (alias `@` → `src`, env defines), `tailwind.config.ts`, `postcss.config.ts`.
- Entry: `index.html`. Build output: `out/`.

## Build, Test, and Development Commands
- Dev: `npm run dev` — start Vite on `http://localhost:3000`.
- Build: `npm run build` — production build to `out/` with source maps.
- Preview: `npm run preview` — serve the built app.
- Type check: `npx tsc -p tsconfig.app.json --noEmit`.
- Lint: `npx eslint src --max-warnings=0`.

## Coding Style & Naming Conventions
- TypeScript: `strict` enabled; no unused locals/params (see `tsconfig.*`).
- Components: PascalCase filenames (e.g., `Navbar.tsx`).
- Pages: lower‑case folder with `page.tsx` entry (e.g., `pages/home/page.tsx`).
- Imports: prefer `@/...` alias (e.g., `@/components/feature/Footer`).
- Styles: Tailwind CSS utility classes in JSX; global styles in `src/index.css`.

## Testing Guidelines
- No test runner configured. Prefer Vitest + React Testing Library when adding tests.
- Naming: `*.test.tsx` colocated with code or under `src/__tests__/`.
- For PRs now: include manual test steps and screenshots for UI changes.

## Commit & Pull Request Guidelines
- Commits: follow Conventional Commits (e.g., `feat:`, `fix:`, `chore:`) with concise scope.
- PRs: clear description, linked issues, screenshots (UI), manual test plan, and any required env vars.
- Checks: run `npm run build`, ESLint, and type checks before requesting review.

## Security & Configuration Tips
- Runtime config uses Vite `define` constants: `__BASE_PATH__`, `__IS_PREVIEW__`, `__READDY_PROJECT_ID__`, `__READDY_VERSION_ID__` derived from `BASE_PATH`, `IS_PREVIEW`, `PROJECT_ID`, `VERSION_ID`.
- Set `BASE_PATH` when deploying under a subpath (BrowserRouter `basename`).
- Do not commit secrets or local `.env*`; avoid hardcoding credentials in code.

