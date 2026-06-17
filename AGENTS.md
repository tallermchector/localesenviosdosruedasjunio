# Agent Instructions for Firebase Studio Next.js Starter

This file provides guidelines and instructions for AI agents working on this codebase.

## Project Architecture & Navigation

This project is a Next.js application utilizing the App Router architecture.

*   **Routing & Pages (`src/app/`):** All application routes, layouts, and main page components are located here.
*   **UI Components (`src/components/`):** Reusable UI components. When building or modifying UI, look for existing components here first.
*   **AI Integration (`src/ai/`):** Contains flows and logic for Genkit integration.
*   **Utilities (`src/lib/`):** Shared utility functions, constants, and helper logic.
*   **Hooks (`src/hooks/`):** Custom React hooks.

## Code Style & Guidelines

*   **Styling:** We use **Tailwind CSS** for all styling. Avoid writing custom CSS files unless absolutely necessary. Use Tailwind utility classes directly in components.
*   **UI Library:** The project heavily relies on **Radix UI** primitives for accessible, unstyled components. When adding new interactive UI elements, prefer using or composing Radix UI components (see `components.json` or `package.json` for installed primitives).
*   **TypeScript:** This is a TypeScript project. Ensure all new code has appropriate type definitions and interfaces.

## Verification & Checks

Before submitting any code changes, you **MUST** verify your work using the following commands:

1.  **Type Checking:** Run `pnpm run typecheck` to ensure there are no TypeScript compilation errors.
2.  **Linting:** Run `pnpm run lint` to catch and fix any linting errors or code style issues.

Do not finalize your work if either of these checks fails. You are responsible for diagnosing and fixing any issues they report.
