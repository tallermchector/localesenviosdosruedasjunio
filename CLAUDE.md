# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `pnpm dev`: Start Next.js development server on `http://localhost:9002` (with Turbopack)
- `pnpm genkit:dev`: Start Genkit development environment
- `pnpm genkit:watch`: Start Genkit in watch mode

### Build & Production
- `pnpm build`: Build the application for production
- `pnpm start`: Start the production server

### Quality & Verification
- `pnpm lint`: Run ESLint
- `pnpm typecheck`: Run TypeScript type checking

## Project Architecture

### Core Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI primitives
- **AI Integration:** Genkit (Firebase Genkit)
- **Database/ORM:** Prisma with PostgreSQL
- **Package Manager:** pnpm

### Directory Structure
- `src/app/`: Next.js App Router (routes, layouts, pages, Server Actions)
- `src/components/`: Reusable React UI components
- `src/ai/`: Genkit flows and AI-related logic
- `src/hooks/`: Custom React hooks
- `src/lib/`: Shared utility functions and libraries
- `src/generated/prisma`: Auto-generated Prisma client (defined in `prisma/schema.prisma`)
- `prisma/`: Database schema and migrations

### Key Architectural Patterns
- **Server Actions:** Used for data mutations and server-side logic (e.g., `src/app/cotizar/actions.ts`).
- **AI Flows:** Complex AI tasks are encapsulated as Genkit flows in `src/ai/flows/`.
- **Prisma Client:** The client is generated into `src/generated/prisma` rather than the default `node_modules`.

## Development Guidelines

- **Styling:** Use Tailwind CSS utility classes. Avoid custom CSS files.
- **UI:** Leverage Radix UI primitives for accessible components.
- **TypeScript:** Maintain strict typing.
- **Verification:** Always run `pnpm typecheck` and `pnpm lint` before finalizing changes.
