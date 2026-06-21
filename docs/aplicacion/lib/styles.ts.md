# lib/styles.ts

```ts
export const CORPORATE_STYLES = `
  :root {
    /* Refined Brand Tokens (Egyptian Blue & Sunbeam Yellow) */
    --primary: #0636A5;
    --on-primary: #FFFFFF;
    --secondary: #3B82F6;
    --on-secondary: #FFFFFF;
    --tertiary: #FFEC01;
    --on-tertiary: #0636A5;
    --surface: #FFFFFF;
    --on-surface: #0F172A;
    --surface-variant: #F1F5F9;
    --outline: #94A3B8;
    
    /* Technical Navy Scales */
    --navy-dark-1: #041E5C;
    --navy-dark-2: #02133D;
    
    /* Typography */
    --font-display: 'Anton', sans-serif;
    --font-subhead: 'Bebas Neue', sans-serif;
    --font-body: 'Inter', sans-serif;
  }

  html, body, #root {
    height: 100%;
    background-color: var(--surface);
    color: var(--on-surface);
    font-family: var(--font-body);
    overflow: hidden;
    letter-spacing: -0.01em;
  }

  .font-display { font-family: var(--font-display); }
  .font-subhead { font-family: var(--font-subhead); }

  .corporate-grid {
    background-image: linear-gradient(var(--surface-variant) 1px, transparent 1px),
                      linear-gradient(90deg, var(--surface-variant) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  /* Neo-Brutalism Shadow System */
  .shadow-brutal {
    box-shadow: 8px 8px 0px var(--primary);
  }
  .shadow-neo {
    box-shadow: 4px 4px 0px var(--primary);
  }
  .shadow-accent {
    box-shadow: 6px 6px 0px var(--tertiary);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-family: var(--font-subhead);
    text-transform: uppercase;
    padding: 0 1.5rem;
    cursor: pointer;
    border: 3px solid var(--primary);
    border-radius: 0;
    font-weight: 500;
    letter-spacing: 0.1em;
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .btn-primary {
    background-color: var(--tertiary);
    color: var(--on-tertiary);
  }
  .btn-primary:hover:not(:disabled) {
    background-color: var(--primary);
    color: var(--on-primary);
    transform: translate(-4px, -4px);
    box-shadow: 10px 10px 0px var(--tertiary);
  }

  .btn-secondary {
    background-color: var(--secondary);
    color: var(--on-secondary);
    border-color: var(--primary);
  }
  .btn-secondary:hover:not(:disabled) {
    background-color: var(--primary);
    color: var(--on-primary);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px var(--secondary);
  }

  .btn-outline {
    background-color: transparent;
    color: var(--primary);
    border: 3px solid var(--primary);
  }
  .btn-outline:hover:not(:disabled) {
    background-color: var(--primary);
    color: var(--on-primary);
  }

  .prompt-display-box {
    background: var(--navy-dark-2);
    color: var(--tertiary);
    font-family: 'JetBrains Mono', monospace;
    padding: 1.5rem;
    border: 3px solid var(--primary);
    white-space: pre-wrap;
    border-left: 10px solid var(--tertiary);
  }

  .pulse-dot {
    width: 10px;
    height: 10px;
    background: var(--tertiary);
    border-radius: 50%;
    animation: pulse-ring 2s infinite;
    border: 2px solid var(--primary);
  }

  @keyframes pulse-ring {
    0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0 0 rgba(6, 54, 165, 0.4); }
    70% { transform: scale(1.8); opacity: 0; box-shadow: 0 0 0 12px rgba(6, 54, 165, 0); }
    100% { transform: scale(1); opacity: 0; }
  }

  .custom-scrollbar::-webkit-scrollbar { width: 8px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: var(--surface); }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--outline); border: 2px solid var(--surface); }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: var(--primary); }

  .masonry-grid {
    column-count: 1;
    column-gap: 2.5rem;
  }
  @media (min-width: 768px) { .masonry-grid { column-count: 2; } }
  @media (min-width: 1440px) { .masonry-grid { column-count: 3; } }
`;

```
