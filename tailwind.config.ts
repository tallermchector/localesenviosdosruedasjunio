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
      // Sistema de espaciado exacto del brand book
      spacing: {
        'unit': '4px',
        'stack-sm': '8px',
        'stack-md': '24px',
        'stack-lg': '48px',
        'gutter': '16px',
        'margin-mobile': '20px',
        'margin-desktop': '64px',
      },
      // Tipografías exactas del brand book
      fontFamily: {
        'title': ['Anton', 'sans-serif'],
        'subtitle': ['Bebas Neue', 'sans-serif'],
        'body': ['Bebas Neue', 'sans-serif'],
      },
      // Colores exactos del brand book
      colors: {
        'primary': '#0635A6',
        'secondary': '#FFEC00',
        'white': '#FFFFFF',
      },
      // Sombras duras exactas del brand book (sin blur)
      boxShadow: {
        'hard-primary': '4px 4px 0px 0px #0635A6',
        'hard-secondary': '4px 4px 0px 0px #FFEC00',
        'hard-white': '4px 4px 0px 0px #FFFFFF',
        'none': '0px 0px 0px 0px',
      },
      // Radio de borde: 0px en todas partes (neo-brutalista)
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
