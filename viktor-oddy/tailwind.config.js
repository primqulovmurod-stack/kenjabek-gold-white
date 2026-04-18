/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PP Neue Montreal"', 'system-ui', 'sans-serif'],
        mondwest: ['"PP Mondwest"', 'serif'],
      },
      colors: {
        primary: '#051A24',
        secondary: '#0D212C',
        muted: '#273C46',
        light: '#F6FCFF',
        lighter: '#E0EBF0',
      },
      boxShadow: {
        'primary': '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5)',
        'secondary': '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)',
        'card-light': '0 4px 16px rgba(0,0,0,0.08)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-mobile': 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

