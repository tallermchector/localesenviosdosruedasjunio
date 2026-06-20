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
- `pnpm test`: Run unit and integration tests (uses Jest)
- `pnpm test:watch`: Run tests in watch mode

### Database
- `pnpm prisma:generate`: Generate Prisma client from schema
- `pnpm prisma:migrate`: Apply pending database migrations
- `pnpm prisma:studio`: Open Prisma Studio for database inspection

### Project Structure Overview
- `src/app/`: Next.js App Router containing routes, layouts, pages, and Server Actions.
- `src/components/`: Reusable React UI components built with Radix UI primitives.
- `src/ai/`: Genkit flows and AI-related logic.
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Shared utility functions and libraries.
- `src/generated/prisma/`: Auto‑generated Prisma client (do not edit manually; regenerate via `pnpm prisma:generate`).
- `prisma/`: Database schema and migration scripts.

### Key Architectural Patterns
- **Server Actions**: Used for data mutations and server‑side logic (e.g., `src/app/cotizar/actions.ts`).
- **AI Flows**: Complex AI tasks are encapsulated as Genkit flows in `src/ai/flows/`.
- **Prisma Client**: Generated into `src/generated/prisma` rather than `node_modules`.

### Development Guidelines
- **Styling**: Use Tailwind CSS utility classes; avoid custom CSS files unless absolutely necessary.
- **UI**: Leverage Radix UI primitives for accessible components.
- **TypeScript**: Maintain strict typing (`strict: true` in tsconfig).
- **Verification**: Always run `pnpm typecheck` and `pnpm lint` before finalizing changes; run relevant unit tests for any new feature.
- **Performance**: Consult the Genkit dashboard for flow performance metrics; profile hot paths before optimizing.
- **Deployment**: When deploying, ensure environment variables for production are set in the hosting platform; run `pnpm build` followed by `pnpm start` locally to verify the production build.

## Reference Materials
- `README.md`: Project overview, setup instructions, and deployment details.
- `eslint.config.mjs`: ESLint configuration for code quality enforcement.
- `tailwind.config.ts`: Tailwind CSS configuration used throughout the project.