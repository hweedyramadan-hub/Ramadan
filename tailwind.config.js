/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        obsidian: '#050505',
        /* Custom Olive Green Palette */
        olive: {
          50: '#f4f7f0',
          100: '#e4ebd9',
          200: '#cadab6',
          300: '#a6c188',
          400: '#81a25e',
          500: '#628440', /* Main Brand Color */
          600: '#4c6830',
          700: '#3b5126',
          800: '#304221',
          900: '#28371d',
          950: '#141e0d',
        }
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'aurora': 'aurora 15s ease infinite alternate',
        'playhead': 'playhead 4s linear infinite',
        'audio-bar': 'audio-bounce 0.5s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        'aurora': {
          '0%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(10%, 10%) scale(1.1)' },
          '100%': { transform: 'translate(-10%, -5%) scale(1)' }
        },
        'playhead': {
          '0%': { left: '0%' },
          '100%': { left: '100%' }
        },
        'audio-bounce': {
          '0%': { height: '20%' },
          '100%': { height: '100%' }
        }
      }
    }
  }
};
