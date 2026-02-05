/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAFAF8',
        ink: '#0A0A0A',
        'ink-light': '#404040',
        'ink-muted': '#6B7280',
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#0A0A0A',
            a: {
              color: '#2563EB',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              '&:hover': { color: '#1D4ED8' },
            },
            'h2, h3, h4': {
              color: '#0A0A0A',
              fontWeight: '700',
            },
            strong: { color: '#0A0A0A' },
            blockquote: {
              borderLeftColor: '#2563EB',
              color: '#404040',
            },
            code: {
              color: '#0A0A0A',
              backgroundColor: '#F3F4F6',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.375rem',
            },
            'thead th': {
              color: '#0A0A0A',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
