/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores institucionales
        institucional: {
          red: {
            DEFAULT: '#E30613', // Rojo institucional
            light: '#FF4D59',  // Tono más claro de rojo
            dark: '#B30000'    // Tono más oscuro de rojo
          },
          blue: {
            DEFAULT: '#0033A0', // Azul institucional
            light: '#3D6BCE',  // Tono más claro de azul
            dark: '#001F5C'    // Tono más oscuro de azul
          },
          white: '#FFFFFF'     // Blanco puro
        }
      },
      backgroundImage: {
        'institucional-gradient': 'linear-gradient(135deg, #E30613 0%, #0033A0 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
