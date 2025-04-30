import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutrals: {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          400: '#BDBDBD',
          500: '#9E9E9E',
          700: '#616161',
          900: '#212121',
          999: '#000000',
        },
        purple: {
          200: '#CE93D8',
          500: '#9C27B0',
          700: '#6A1B9A',
        },
        teal: {
          50: '#E0F2F1',
          400: '#26A69A',
          600: '#00897B',
        },
        green: {
          500: '#4CAF50',
        },
        yellow: {
          500: '#FFCA28',
        },
        gradient: {
          bottom: '#FAFAFA',
        },
        text: {
          primary: '#202326',
          secondary: '#393A3C',
          medium: '#6D6F73',
        },
        primary: '#7B1FA2',
        background: '#FAFAFA',
        brand: '#9C27B0',
        success: '#4CAF50',
        warning: '#FFCA28',
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
