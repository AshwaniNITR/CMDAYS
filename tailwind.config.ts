import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1750px',  // Devices ≥1750px
        '4xl': '1920px',
        '5xl': '2560px',
      },
    },
  },
  plugins: [],
}

export default config