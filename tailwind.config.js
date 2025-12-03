/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep forest greens - evocative of California farmland
        forest: {
          50: '#f3f6f4',
          100: '#e1e9e3',
          200: '#c4d4c9',
          300: '#9db8a5',
          400: '#72967d',
          500: '#527a5f',
          600: '#3f614a',
          700: '#344e3d',
          800: '#2c4033',
          900: '#1e2d23',
          950: '#111a14',
        },
        // Warm California gold accents
        gold: {
          50: '#fefdf8',
          100: '#fdf9e9',
          200: '#faf0c8',
          300: '#f6e39d',
          400: '#f0cf5f',
          500: '#e8b931',
          600: '#d49b1c',
          700: '#b07818',
          800: '#8f5f1b',
          900: '#764e1a',
          950: '#44290b',
        },
        // Warm earth tones
        earth: {
          50: '#faf8f6',
          100: '#f3efe9',
          200: '#e6ddd1',
          300: '#d4c5b2',
          400: '#bfa78e',
          500: '#ae9072',
          600: '#a17d62',
          700: '#866752',
          800: '#6e5546',
          900: '#5a463b',
          950: '#30241e',
        },
        // Slate for text and dark backgrounds
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      lineHeight: {
        'body': '1.6',
        'heading': '1.15',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(17, 26, 20, 0.85), rgba(17, 26, 20, 0.95))',
      },
    },
  },
  plugins: [],
};
