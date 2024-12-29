/** @type {import('tailwindcss').Config} */
export default {
  content: ["assets/**", "entrypoints/**", "components/**"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      dropShadow: {
        'wxt': '0 0 0.5em #54bc4ae0',
        'react': '0 0 0.5em #61dafbaa',
      },
    },
  },
  plugins: [],
}