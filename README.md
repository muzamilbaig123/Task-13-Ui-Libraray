# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # EaseUI

  EaseUI is a React and TypeScript UI component library with an in-project documentation/demo site. Components use Tailwind CSS utility classes, `class-variance-authority` variants, Radix Slot composition, Lucide icons, and GSAP animations.

  This README is an AI handoff document. It describes the current codebase as it exists, including incomplete areas and known issues. When changing the project, preserve the existing React/Vite/TypeScript patterns unless the task explicitly requires an architectural change.

  ## Quick Start

  Requirements: Node.js, npm, and a modern browser.

  ```bash
  npm install
  npm run dev
  ```

  The Vite dev server prints the local URL, normally `http://localhost:5173`.

  ```bash
  npm run build
  npm run preview
  ```

  `build` creates the library bundle and TypeScript declaration files. There is no test script currently defined in `package.json`.

  ## What The Project Contains

  - A Vite React application used to preview and document the components.
  - A publishable library entrypoint at `src/index.ts`.
  - Demo routes for Button, Card, Modal, Input, and Navbar.
  - Redux Toolkit theme state with light/dark mode persisted in `localStorage`.
  - Reusable GSAP entrance, focus, and hover animation helpers.

  ## Technology

  - React 18+ and React DOM
  - TypeScript 5.8
  - Vite 7 with `@vitejs/plugin-react`
  - Tailwind CSS 4 through `@tailwindcss/vite`
  - React Router 7
  - Redux Toolkit and React Redux
  - GSAP
  - Radix UI Slot
  - `class-variance-authority`, `clsx`, and `tailwind-merge`
  - Lucide React icons

  ## Application Flow

  `src/main.tsx` imports global CSS, reads the saved theme, dispatches `setTheme`, creates the React root, and wraps the app in Redux `Provider`.

  `src/App.tsx` renders `AppRouter`. `src/router/AppRouter.tsx` creates the browser router. `HomeLayout` provides the personal documentation navbar and an `Outlet`; `ComponentLayout` provides the responsive component sidebar and a second `Outlet` for the selected demo page.

  ### Routes

  | URL | Page |
  | --- | --- |
  | `/` | `HomePage` |
  | `/components/button` | `ButtonPage` |
  | `/components/card` | `CardPage` |
  | `/components/modal` | `ModalPage` |
  | `/components/input` | `InputPage` |
  | `/components/navbar` | `NavbarPage` |

  There is currently no explicit 404 page or router error boundary. The sidebar also lists `Carousel`, `Tooltip`, and `Layout`, but those routes/components are not implemented.

  ## Complete Structure

  ```text
  .
  ├── index.html                  # Vite HTML entrypoint
  ├── package.json                # Package metadata, exports, dependencies, scripts
  ├── package-lock.json           # npm dependency lockfile
  ├── vite.config.ts              # React/Tailwind plugins, @ alias, library build
  ├── eslint.config.js            # Flat ESLint configuration
  ├── vercel.json                 # SPA rewrite for client-side routes
  ├── tsconfig.json               # TypeScript project references
  ├── tsconfig.app.json           # Browser/app TypeScript settings
  ├── tsconfig.node.json          # Vite/config TypeScript settings
  ├── tsconfig.lib.json           # Declaration output settings for the library
  ├── public/
  │   └── vite.svg                # Default public asset/fav icon
  └── src/
      ├── App.tsx                 # Root app component
      ├── main.tsx                # React bootstrap, Redux Provider, theme restore
      ├── index.ts                # Public package entrypoint
      ├── index.css               # Tailwind import and theme CSS variables
      ├── style.css               # Component/library stylesheet import
      ├── assets/react.svg        # Default unused Vite asset
      ├── components/
      │   ├── index.ts            # Top-level component barrel and style import
      │   ├── Button/
      │   │   ├── Button.tsx      # Variant-based animated Button
      │   │   └── index.ts        # Button barrel
      │   ├── Card/
      │   │   ├── Card.tsx        # Variant-based Card with image/footer support
      │   │   └── index.ts        # Card barrel
      │   ├── Input/
      │   │   ├── Input.tsx       # Base forward-ref input
      │   │   ├── AnimatedInput.tsx
      │   │   ├── FloatingLabelInput.tsx
      │   │   ├── InputWithIcon.tsx
      │   │   ├── NumberInput.tsx
      │   │   ├── PasswordInput.tsx
      │   │   ├── Textarea.tsx
      │   │   └── index.ts        # Input component barrel
      │   ├── Modal/
      │   │   ├── Modal.tsx       # Conditional overlay modal
      │   │   └── index.ts        # Modal barrel
      │   ├── navbar/
      │   │   ├── Navbar.tsx      # Library navbar component
      │   │   └── index.ts        # Navbar barrel
      │   └── Personal/
      │       ├── Navbar.tsx      # Demo site's navbar and theme toggle
      │       ├── CodeBlock.tsx   # Copyable code preview
      │       └── PropsTable.tsx  # API props documentation table
      ├── features/
      │   └── ThemeSlice.tsx      # Redux light/dark theme slice
      ├── layouts/
      │   ├── HomeLayout.tsx      # Shared outer layout
      │   └── ComponentLayout.tsx # Component sidebar layout
      ├── libs/
      │   ├── utils.ts            # cn() class composition helper
      │   └── animations/
      │       ├── entranceAnimation.tsx # Entrance GSAP presets
      │       ├── focusAnimation.tsx    # Focus GSAP presets
      │       └── hoverAnimation.tsx    # Hover GSAP presets
      ├── pages/
      │   ├── HomePage.tsx        # Home route placeholder
      │   ├── ComponentsDemo.tsx  # Shared code/demo wrapper
      │   └── components/
      │       ├── ButtonPage.tsx
      │       ├── CardPage.tsx
      │       ├── InputPage.tsx
      │       ├── ModalPage.tsx
      │       └── NavbarPage.tsx
      ├── router/
      │   └── AppRouter.tsx       # Route definitions
      └── store/
          └── Store.tsx            # Redux store and inferred types
  ```

  ## Component API Summary

  ### Button

  `Button` is a `forwardRef` component built with CVA. It supports native button props, `asChild`, `variant`, `size`, `animation`, and `hoverAnimation`.

  Variants: `dark`, `primary`, `secondary`, `destructive`, `ok`, `ghost`, `link`, `outline`.

  Sizes: `default`, `sm`, `lg`, `xl`, `icon`, `full`, `auto`.

  ### Card

  `Card` supports `title`, `description`, `children`, `image`, `ratio`, `footer`, `animate`, `asChild`, `variant`, `size`, and `hoverAnimation`.

  Variants: `light`, `dark`, `outline`. Sizes: `sm`, `md`, `lg`. Image ratios: `square`, `16:9`, `4:3`.

  ### Inputs

  - `Input`: native input props plus `label`, `hint`, `error`, `size`, and `tone` (`default`, `error`, `success`).
  - `AnimatedInput`: base input with GSAP focus animation.
  - `FloatingLabelInput`: animated floating-label input.
  - `InputWithIcon`: icon, `iconPosition`, `iconColor`, and optional `animated` focus behavior.
  - `NumberInput`: increment/decrement control with `step`, `min`, `max`, and `onChange(value: number)`.
  - `PasswordInput`: password visibility toggle using Lucide `Eye`/`EyeOff`.
  - `Textarea`: forward-ref textarea with optional `label` and `size`.

  ### Modal

  `Modal` renders nothing when `isOpen` is false. When open it renders a backdrop, optional `title`, `description`, `children`, close/done actions, and `onClose`/`onDone` callbacks. It supports `variant` (`light`, `dark`, `outline`), `size` (`sm`, `md`, `lg`), `asChild`, and native div props.

  ### Navbar

  The library `Navbar` supports `variant` (`dark`, `light`, `primary`, `glass`), `size` (`default`, `sm`, `lg`, `xl`), `animation`, `hoverAnimation`, `asChild`, and native nav props. It currently renders hard-coded Logo/Home/About/Customer/Profile content.

  ## Utilities And State

  - `cn(...inputs)` in `src/libs/utils.ts` combines `clsx` and `tailwind-merge`.
  - `entranceAnimations`: `fadeIn`, `scaleIn`, `slideUp`, `bounceIn`, `none`.
  - `hoverAnimations`: `jiggle`, `scale`, `bounce`, `shadowPulse`, `float3D`, `wobbleFollow`, `reset`, `none`.
  - `focusAnimations` is intended to expose `glow` and `reset`.
  - Redux state currently contains `theme.mode`, typed as `light | dark`.
  - `toggleTheme` changes the mode, updates `localStorage`, and writes `data-theme` to `document.documentElement`.

  ## Package Usage

  The library build is configured in `vite.config.ts` with `src/index.ts` as entrypoint. It outputs `dist/easeui.es.js`, `dist/easeui.umd.js`, CSS, and declaration files under `dist/types`. React and React DOM are externalized peer dependencies.

  Current public entrypoint:

  ```tsx
  import { Button, Card, Input, Modal } from "dev-ease-ui";
  import "dev-ease-ui/style.css";
  ```

  `src/components/index.ts` currently exports `Button`, `Card`, `Modal`, and the base `Input`. Advanced input controls and the library `Navbar` are available through their internal barrels but are not re-exported from the package root yet.

  ## Styling And Aliases

  Tailwind CSS is imported from `src/index.css` and `src/style.css`. Theme variables are `--bg-color`, `--text-color`, `--primary-color`, and dark-mode `--card-bg`. The `@` alias resolves to `src`, so imports such as `@/libs/utils` are valid.

  ## Known Issues And Context For Future AI Work

  These are current observations, not silently fixed as part of the documentation update:

  1. `src/libs/animations/focusAnimation.tsx` references GSAP without importing it; this can fail typechecking/build if the file is included.
  2. `Button.tsx` uses `gsap` in mouse handlers while its import is commented out.
  3. The right icon in `InputWithIcon` currently uses `right-1/2`, which likely places it incorrectly.
  4. `NumberInput` has custom ref/value handling and its callback is primarily triggered by its step buttons rather than normal typing.
  5. Some labels are not associated with input controls through `htmlFor`/`id`.
  6. `HomePage` is currently a placeholder. The demo wrapper declares a `showCode` prop but manages its own state.
  7. `ModalPage` contains a source-code snippet typo: `setLightModel` should be `setLightModal`.
  8. `CardPage` uses external Unsplash image URLs, so those previews require network access.
  9. There is no automated test suite or test command in `package.json`.
  10. The component sidebar lists unimplemented `Carousel`, `Tooltip`, and `Layout` entries.

  When implementing a fix, first verify whether the issue belongs to the library component, the demo/documentation layer, or the package barrel. Keep public APIs backward-compatible where possible and update the relevant demo/API table when a component API changes.

  ## Deployment

  `vercel.json` rewrites all requests to `/index.html`, allowing Vercel to serve the React Router SPA routes correctly.
