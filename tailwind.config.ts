import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Espaciado del Brand Book
      spacing: {
        'unit': '4px',
        'stack-sm': '8px',
        'stack-md': '24px',
        'stack-lg': '48px',
        'gutter': '16px',
        'margin-mobile': '20px',
        'margin-desktop': '64px',
      },
      // Tipografías del Brand Book
      // Anton = títulos (display/title) · Bebas Neue = subtítulos/datos (subtitle)
      fontFamily: {
        'title': ['Anton', 'sans-serif'],
        'subtitle': ['Bebas Neue', 'sans-serif'],
        'body': ['Bebas Neue', 'sans-serif'],
        // Aliases para compatibilidad con componentes existentes
        'display': ['Anton', 'sans-serif'],
        'subhead': ['Bebas Neue', 'sans-serif'],
      },
      // Colores del Brand Book
      // Egyptian Blue #0635A6 = primary · Sunbeam Yellow #FFEC00 = secondary · White #FFFFFF
      colors: {
        'primary': '#0635A6',
        'secondary': '#FFEC00',
        'white': '#FFFFFF',
        // Colores derivados para componentes legacy
        'accent': '#FFEC00',       // = secondary
        'light': '#FFFFFF',       // = white
        'dark': '#0635A6',        // = primary
        'primary-navy': '#0635A6', // = primary
        'on-background': '#1c1b1b',
        'on-surface-variant': '#0635A6',
      },
      // Sombras duras del Brand Book (sin blur — neo-brutalista)
      boxShadow: {
        'hard-primary': '4px 4px 0px 0px #0635A6',
        'hard-secondary': '4px 4px 0px 0px #FFEC00',
        'hard-white': '4px 4px 0px 0px #FFFFFF',
        'none': '0px 0px 0px 0px',
        // Aliases para compatibilidad
        'brutal': '4px 4px 0px 0px #0635A6',
        'brutal-sm': '2px 2px 0px 0px #0635A6',
      },
      // Radio de borde: 0px (flat — neo-brutalista)
      borderRadius: {
        'none': '0',
        'sm': '0',
        'DEFAULT': '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        '3xl': '0',
        'full': '0',
      },
    },
  },
  plugins: [],
} satisfies Config;
