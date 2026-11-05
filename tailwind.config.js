/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm sand / desert neutrals
        sand: {
          50: '#FBF7F0',
          100: '#F5EDE0',
          200: '#E8D8C0',
          300: '#D9C49E',
          400: '#C9A86A',
          500: '#B8964F',
          600: '#A37E3A',
          700: '#876830',
          800: '#6B5226',
          900: '#4F3D1D',
        },
        // Deep heritage browns / earth tones
        earth: {
          50: '#F8F5F2',
          100: '#EDE7E0',
          200: '#D4C7BC',
          300: '#B8A396',
          400: '#9C7F6F',
          500: '#7A5E4F',
          600: '#5E4A3D',
          700: '#4A3A2F',
          800: '#3A2E25',
          900: '#2D1F12',
        },
        // Teal accent — traditional Islamic tilework
        teal: {
          50: '#F0FAF9',
          100: '#D9F2F0',
          200: '#B3E5E1',
          300: '#80D3CE',
          400: '#4DBCB6',
          500: '#2BA09B',
          600: '#1F8581',
          700: '#1A6B68',
          800: '#165654',
          900: '#103E3D',
        },
        // Terracotta / clay accent
        clay: {
          50: '#FBF3F0',
          100: '#F5E1DA',
          200: '#E8C2B5',
          300: '#D79E8A',
          400: '#C47B5F',
          500: '#A85E42',
          600: '#8A4A33',
          700: '#6E3A28',
          800: '#522E22',
          900: '#3D231B',
        },
        // Deep emerald — Islamic green
        emerald2: {
          50: '#F0FAF4',
          100: '#D9F2E3',
          200: '#B3E5C8',
          300: '#80D3A4',
          400: '#4DBC7F',
          500: '#2BA061',
          600: '#1F854E',
          700: '#1A6B3F',
          800: '#165634',
          900: '#103E26',
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        display: ['Amiri', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out both',
        'fade-in': 'fadeIn 1s ease-out both',
        'scale-in': 'scaleIn 0.5s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'ken-burns': 'ken-burns 20s ease-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.15) translate(-2%, -2%)' },
        },
      },
    },
  },
  plugins: [],
};
