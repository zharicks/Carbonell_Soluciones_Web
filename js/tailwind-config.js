/**
 * Configuración de Tailwind CSS (usada por el CDN)
 * Debe cargarse antes del script de Tailwind CDN.
 */
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffcc00',
        'background-light': '#f8f8f5',
        'background-dark': '#121212',
        'neutral-dark': '#1a1a1a',
        'accent-gray': '#2d2d2d'
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      }
    }
  }
};
