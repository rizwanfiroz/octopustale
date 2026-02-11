# Overview

This is a portfolio/agency website called "AESTHETICS" — a single-page application for a global software development collective. It showcases projects, services, and includes a contact form. The app is built with a React frontend and Express backend, using PostgreSQL for data persistence. The site features a dark theme with animated sections, project cards, and a contact form.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend

- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — currently just a home page and 404
- **Styling**: Tailwind CSS with CSS variables for theming, dark mode by default
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, located in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll-triggered reveals and transitions
- **Data Fetching**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation (via @hookform/resolvers)
- **Fonts**: Syne (display) and Space Grotesk (body), loaded via Google Fonts
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

## Backend

- **Framework**: Express 5 on Node.js with TypeScript (run via tsx)
- **API Pattern**: RESTful JSON API under `/api/` prefix
- **Route Definitions**: Shared route contracts in `shared/routes.ts` define paths, methods, input schemas, and response schemas — used by both server and client
- **Validation**: Zod schemas generated from Drizzle table definitions via `drizzle-zod`
- **Dev Server**: Vite dev server runs as middleware in development; static files served in production from `dist/public`
- **Build**: Custom build script (`script/build.ts`) uses Vite for client and esbuild for server, outputting to `dist/`

## Data Storage

- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with `drizzle-orm/node-postgres` driver
- **Schema**: Defined in `shared/schema.ts` — two tables:
  - `projects`: id, title, description, imageUrl, category, createdAt
  - `contacts`: id, name, email, message, createdAt
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Storage Layer**: `server/storage.ts` implements `IStorage` interface with `DatabaseStorage` class, providing a clean abstraction over database operations

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/projects` | List all projects |
| POST | `/api/projects` | Create a new project |
| POST | `/api/contacts` | Submit a contact form message |

## Key Design Decisions

1. **Shared schema and route contracts**: The `shared/` directory contains both database schema and API route definitions, ensuring type safety across the full stack. Both client and server import from the same source of truth.

2. **Database seeding**: The server seeds the database on startup (called in `routes.ts`), providing demo project data.

3. **Fallback demo data**: The frontend includes hardcoded fallback projects if the API returns empty results, ensuring the UI always looks complete.

4. **Single-page portfolio layout**: All content sections (hero, work, services, about, contact) are on a single page with anchor-link navigation.

# External Dependencies

- **PostgreSQL**: Required. Connection via `DATABASE_URL` environment variable. Used with `pg` (node-postgres) connection pool and Drizzle ORM.
- **Google Fonts**: Syne and Space Grotesk fonts loaded from fonts.googleapis.com
- **Unsplash**: Project images reference unsplash.com URLs for demo/placeholder content
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, and `@replit/vite-plugin-dev-banner` are used in development when running on Replit