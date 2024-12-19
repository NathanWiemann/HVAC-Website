/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#1E3A8A',
        accent: '#3B82F6'
      }
    }
  },
  plugins: []
};