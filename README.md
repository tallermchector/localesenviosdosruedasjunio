# Firebase Studio

This is a Next.js starter project designed for Firebase Studio, providing a robust foundation for building modern web applications.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **UI Library:** [React](https://react.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Components:** [Radix UI](https://www.radix-ui.com/)
*   **AI Integration:** [Genkit](https://firebase.google.com/docs/genkit)
*   **Backend/Hosting:** [Firebase](https://firebase.google.com/)

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Available Scripts

The following scripts are available in the `package.json`:

*   `pnpm run dev`: Starts the Next.js development server with Turbopack on port 9002.
*   `pnpm run build`: Builds the application for production.
*   `pnpm run start`: Starts the Next.js production server.
*   `pnpm run lint`: Runs the Next.js linter.
*   `pnpm run typecheck`: Runs TypeScript type checking without emitting files.
*   `pnpm run genkit:dev`: Starts the Genkit development environment.
*   `pnpm run genkit:watch`: Starts Genkit in watch mode for the AI development script.

## Project Structure

*   `src/app/`: Contains the Next.js application routes and pages.
*   `src/components/`: Reusable UI components.
*   `src/ai/`: Genkit flows and AI integration logic.
*   `src/lib/`: Utility functions and shared libraries.
*   `src/hooks/`: Custom React hooks.
