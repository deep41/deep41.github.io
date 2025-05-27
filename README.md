# Deepak's Portfolio - Astro + React + TypeScript

A modern portfolio website built with Astro, React, TypeScript, Tailwind CSS, and integrated Google Analytics tracking.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Google Analytics Setup

This site includes Google Analytics 4 (GA4) integration. To enable tracking:

1. **Get your GA4 Tracking ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property or use an existing one
   - Find your tracking ID (format: `G-XXXXXXXXXX`) in the Admin section

2. **Configure the tracking ID:**
   - Create a `.env` file in the root directory
   - Add your tracking ID:
   ```bash
   PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

3. **Features included:**
   - Automatic page view tracking
   - Contact form submission tracking
   - External link click tracking (GitHub, LinkedIn, Resume downloads)
   - Project and blog post view tracking
   - Only loads in production builds (not during development)

4. **Deploy and verify:**
   - Deploy your site to production
   - Check Google Analytics Real-time reports to verify tracking is working
