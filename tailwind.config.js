export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
        'dash': 'dash 5s linear infinite',
      },
      keyframes: {
        dash: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-30' },
        },
      },
    },
  },
  plugins: [],
}