import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue: "#4b78ba",
        bluer: "#1c54a7",
        brown: "#B34418",
        browner: "#a23104",
        yellow: "#F8AD1D",
        yellower: "#df9404",
        ysmoke: "#FACF7E",
        pink: "#F4A27A",
        pinker: "#F18E5C",
        orange: "#e8521d",
        oranger: "#d5410d",
        primary: "#de440e",
      },
    },
  },
  plugins: [],
}
export default config
