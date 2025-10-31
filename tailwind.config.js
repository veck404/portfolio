/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '2.5rem',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Inter var"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['"Inter var"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: '#22d3ee',
        muted: '#64748b',
        background: {
          DEFAULT: '#f8fafc',
          dark: '#0f172a',
        },
      },
      textColor: {
        subtle: '#94a3b8',
      },
      backgroundImage: {
        'soft-radial':
          'radial-gradient(circle at top, rgba(99,102,241,0.28), transparent 55%)',
        'section-gradient':
          'linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.55) 100%)',
      },
      boxShadow: {
        'brand-glow':
          '0 20px 45px -20px rgba(99,102,241,0.45), 0 30px 80px -40px rgba(34,211,238,0.35)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
