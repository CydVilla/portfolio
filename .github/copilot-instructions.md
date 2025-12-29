# GitHub Copilot Instructions for Portfolio

## Project Overview

This is a modern, blazing-fast developer portfolio built with Vite, React, and Chakra UI. The application showcases projects, skills, and contact information in a responsive, accessible interface.

## Technology Stack

- **Build Tool**: Vite 6.3.5
- **Framework**: React 18.2.0 with TypeScript 5.4.2
- **UI Library**: Chakra UI 2.8.2
- **Animations**: Framer Motion 11.0.17
- **Routing**: React Router DOM 6.23.0
- **Styling**: Emotion (CSS-in-JS via Chakra UI)
- **Icons**: React Icons 4.12.0

## Project Structure

```
public/
  assets/           # Static images and files (use /assets/your-image.jpg in code)
src/
  components/       # Reusable React components
  data/             # Project and other data (e.g., projects.ts)
  layouts/          # Layout components (navbar, footer, etc.)
  pages/            # Main pages (Home, About, Projects, Contact)
  styles/           # Chakra UI theme and custom styles
  main.tsx          # App entry point
  App.tsx           # App root component
```

## Development Commands

- **Start dev server**: `npm run dev` (runs on http://localhost:5173)
- **Build for production**: `npm run build` (outputs to `dist/`)
- **Preview production build**: `npm run preview`

## Code Style and Conventions

### TypeScript Configuration

- **Strict mode enabled**: All code must be type-safe
- **Target**: ES2020
- **JSX**: react-jsx
- **Path aliases**: Use `@/*` for imports from `src/`
- **No unused locals or parameters**: Clean up unused code

### React Conventions

- Use **functional components** with hooks
- Use **TypeScript** for all new components
- Export components as **default exports**
- Follow **React best practices** for state management and effects

### Component Structure

- Place reusable UI components in `src/components/`
- Place page-level components in `src/pages/`
- Place layout components in `src/layouts/`
- Keep components focused and single-responsibility

### Styling with Chakra UI

- Use **Chakra UI components** for all UI elements
- Leverage the custom theme in `src/styles/theme.ts`
- Use **brand colors** (brand.50 to brand.900) for primary colors
- Use **responsive props** for mobile-first design
- Follow Chakra UI's **accessibility best practices**

### Theme Colors

- Primary brand colors: `brand.500` (default), `brand.600` (hover)
- Background: `gray.50`
- Text: `gray.800`
- Custom button variants: `solid` and `outline`

### File Naming

- Use **PascalCase** for React component files (e.g., `ProjectCard.tsx`)
- Use **camelCase** for utility files and data files (e.g., `projects.ts`)
- Use `.tsx` extension for files with JSX
- Use `.ts` extension for files without JSX

### Import Organization

- Group imports in this order:
  1. React and external libraries
  2. Chakra UI components
  3. Local components and layouts
  4. Data and utilities
  5. Styles and assets

### Data Management

- Store static data in `src/data/` directory
- Use TypeScript interfaces for data structures
- Export data as named or default exports

## Testing and Quality

- No test framework is currently configured
- Code changes should maintain TypeScript strict mode compliance
- Ensure components are accessible (use Chakra UI's built-in a11y features)

## Assets and Images

- Place all static assets in `public/assets/`
- Reference assets using absolute paths: `/assets/your-image.jpg`
- Optimize images before adding them to the repository

## Deployment

- **Build command**: `npm run build`
- **Output directory**: `dist/`
- **Node version**: 18 (specified in `.nvmrc`)
- Compatible with Netlify, Vercel, and other static hosts

## Best Practices for Changes

1. **Keep changes minimal** - Only modify what's necessary
2. **Maintain TypeScript strict mode** - All code must be type-safe
3. **Use existing patterns** - Follow the established code structure
4. **Preserve accessibility** - Use Chakra UI's a11y features
5. **Test locally** - Run `npm run dev` to verify changes
6. **Build before committing** - Ensure `npm run build` succeeds
7. **Mobile-first design** - Use Chakra UI responsive props
8. **Component reusability** - Extract common patterns into components

## Common Tasks

### Adding a New Page

1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/layouts/MainLayout.tsx`

### Adding a New Component

1. Create file in `src/components/` with PascalCase name
2. Use TypeScript for props interface
3. Use Chakra UI components for styling
4. Export as default

### Updating Project Data

- Edit `src/data/projects.ts`
- Maintain existing data structure
- Add images to `public/assets/`

### Customizing Theme

- Edit `src/styles/theme.ts`
- Follow Chakra UI theme structure
- Test changes across all pages

## Dependencies

When suggesting new dependencies:
- Prefer packages that work well with React 18 and TypeScript
- Consider bundle size impact (this is a portfolio site)
- Ensure compatibility with Vite build system
- Check for accessibility support when adding UI libraries
