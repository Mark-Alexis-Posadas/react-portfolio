# Mark Alexis Posadas — Portfolio

Personal portfolio for presenting my web development experience, selected projects, technical toolkit, and contact information. The site positions my work around AI-augmented full-stack development, with a focus on clear interfaces, maintainable code, and fast, thoughtful delivery.

## Built with

- React 18 and TypeScript
- Vite
- Tailwind CSS
- React Icons and Font Awesome

## Portfolio sections

- **About** — experience and development approach
- **Skills & workflow** — front-end, back-end/data, AI-assisted development, and tools
- **Experience** — professional history
- **Projects** — objectives, architecture notes, AI workflow, live demos, and source links
- **Contact** — email-based contact form

The resume PDF is served from `public/Posadas_Mark_Alexis_Resume.pdf`.

## Getting started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

## Available scripts

```bash
npm run dev      # Start the local development server
npm run build    # Type-check and create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project structure

```text
src/
  components/   # Shared navigation and sidebar/hero
  data/         # Portfolio navigation, skills, experience, and projects
  pages/        # About/skills, experience, projects, and contact sections
  types/        # TypeScript data models
  App.tsx       # App composition and theme toggle
  index.css     # Tailwind directives and shared styles
public/         # Static assets, including the downloadable resume
```

Project and experience content lives in `src/data/`; update those files to change the portfolio entries. The project cards use the shared model in `src/types/projects.ts`.

## Project scope

The projects currently featured here demonstrate client-side React and TypeScript work. Their architecture notes identify when a separate REST API or database is not documented, so the portfolio does not imply backend implementations that are not present in those project repositories. AI workflow copy describes the development approach generally; project-specific agent activity is not separately recorded.
