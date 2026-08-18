/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050816',
        navy: {
          950: '#050816',
          900: '#0A0F2C',
          800: '#0F1638',
          700: '#161F4A',
        },
        brand: {
          blue: '#2E6DFF',
          red: '#E23E3E',
          yellow: '#F5C12A',
          green: '#38B76A',
        },
        electric: {
          400: '#3B82F6',
          500: '#2563EB',
          600: '#1D4ED8',
        },
        violet: {
          400: '#8B5CF6',
          500: '#7C3AED',
        },
        cyan: {
          300: '#06B6D4',
          400: '#0891B2',
        },
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
        'radial-fade': 'radial-gradient(ellipse at center, rgba(37,99,235,0.08), transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 35px rgba(37,99,235,0.18)',
        'glow-violet': '0 0 35px rgba(124,58,237,0.18)',
        card: '0 10px 30px -5px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.05)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 1.5s infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        drift: 'drift 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(30px,-20px)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },
    },
  },
  plugins: [],
}


