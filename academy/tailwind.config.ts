import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{mdx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
};
export default config;
