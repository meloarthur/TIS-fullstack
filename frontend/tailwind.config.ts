import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '15': '60px',
        '0.5': '2px',
        '1.25': '5px',
        '1.5': '6px',
        '2.5': '10px',
        '3.75': '15px',
        '7.5': '30px',
      },
      borderRadius: {
        '5': '20px',
        '0.5': '2px',
        '1.25': '5px',
        '1.5': '6px',
        '2.5': '10px',
        '3.75': '15px',
        '7.5': '30px',
      },
      colors: {
        base: {
          dark: '#05060F',
          light: '#FFFFFF',
        },
        primary: {
          lighter: '#D5D1F5',
          light: '#C18FFC',
          main: '#883AE5',
          dark: '#5F12BB',
          pink: '#E01FF1',
        },
        secondary: {
          main: '#E58F3A',
          light: '#FFD780',
          dark: '#C48A0C',
        },
        neutral: {
          '50': '#919195',
          '60': '#181721',
          '70': '#12131A',
          '80': '#11121B',
          '90': '#05060F',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
