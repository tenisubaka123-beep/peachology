/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#fff6f1',
          100: '#ffe9dd',
          200: '#ffd2bb',
          300: '#ffbfa3',
          400: '#ff9f7a',
          500: '#ff8a5c',
          600: '#f06a3a',
          700: '#d95326',
          800: '#b83f1a',
        },
        leaf: {
          DEFAULT: '#4f8a5b',
          dark: '#3d6e46',
          light: '#eef6f0',
        },
        ink: {
          DEFAULT: '#2b1a14',
          soft: '#6b554b',
          light: '#988177',
        },
        surface: {
          DEFAULT: '#fffaf7',
          card: '#ffffff',
          line: '#f1dfd5',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'peach': '0 10px 30px -12px rgba(176, 82, 40, 0.25)',
        'peach-lg': '0 20px 40px -15px rgba(240, 106, 58, 0.25)',
        'soft': '0 4px 20px -2px rgba(43, 26, 20, 0.05)',
        'card': '0 8px 30px rgba(43, 26, 20, 0.06)',
      },
      borderRadius: {
        'brand': '18px',
        'pill': '999px',
      }
    },
  },
  plugins: [],
}
