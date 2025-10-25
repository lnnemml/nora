/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e2122', // Темно-сірий з логотипу
          dark: '#0f1011',
          light: '#2b3235',
        },
        accent: {
          DEFAULT: '#14b089', // Зелений з логотипу
          hover: '#10956f',
          light: '#1ecfa0',
        },
        secondary: {
          DEFAULT: '#334d48', // Teal відтінок
          dark: '#2b3235',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(20, 176, 137, 0.3)',
        'glow-lg': '0 0 30px rgba(20, 176, 137, 0.4)',
      }
    },
  },
  plugins: [],
}
