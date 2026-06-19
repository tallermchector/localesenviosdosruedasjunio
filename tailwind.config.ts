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
      fontFamily: {
        body: ['system-ui', '-apple-system', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
        subhead: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        primary: '#1E3A8A',
        secondary: '#3B82F6',
        accent: '#EAB308',
        light: '#F8FAFC',
        dark: '#0f172a',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        'primary-navy': '#111c38',
        'primary-container': '#1E3A8A',
      },
      boxShadow: {
        brutal: '6px 6px 0px 0px rgba(234, 179, 8, 1)',
        'brutal-sm': '3px 3px 0px 0px rgba(0,0,0,1)',
        neo: '4px 4px 0px 0px #111c38',
        'neo-yellow': '4px 4px 0px 0px #EAB308',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(234, 179, 8, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(234, 179, 8, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(234, 179, 8, 0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        scrollTrack: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 0.75rem))' },
        },
        slideLine: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        floatCard1: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-20px) rotate(0deg)' },
        },
        floatCard2: {
          '0%, 100%': { transform: 'translateY(0) rotate(2deg)' },
          '50%': { transform: 'translateY(-20px) rotate(0deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        'pulse-dot': 'pulseDot 2s infinite',
        'slow-zoom': 'slowZoom 25s linear infinite alternate',
        'scroll-track': 'scrollTrack 30s linear infinite',
        'slide-line': 'slideLine 1s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'float-card-1': 'floatCard1 6s ease-in-out infinite',
        'float-card-2': 'floatCard2 7s ease-in-out infinite reverse',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
