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
        primary: '#002276',
        secondary: '#f5e300',
        accent: '#f5e300',
        light: '#fcf9f8',
        dark: '#1c1b1b',
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
        'primary-navy': '#0f2668',
        'primary-container': '#0635a6',
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px rgba(245, 227, 0, 1)',
        'brutal-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        neo: '4px 4px 0px 0px #0f2668',
        'neo-yellow': '4px 4px 0px 0px #f5e300',
        'premium': 'none', // Removed premium soft shadows
      },
      borderRadius: {
        // Enforce 0px rounded corners
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(245, 227, 0, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(245, 227, 0, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(245, 227, 0, 0)' },
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
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        glowSlow: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 5px rgba(245, 227, 0, 0.3))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(245, 227, 0, 0.6))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
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
        'shimmer': 'shimmer 2.5s infinite linear',
        'glow-slow': 'glowSlow 4s infinite alternate ease-in-out',
        'float': 'float 4s ease-in-out infinite',
        'fade-in-left': 'fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-right': 'fadeInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
