import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ig-primary': '#0095F6',
        'ig-primary-hover': '#1877F2',
        'ig-primary-light': '#E0F1FF',
        'ig-secondary': '#8E8E8E',
        'ig-bg-primary': '#FAFAFA',
        'ig-bg-secondary': '#FFFFFF',
        'ig-bg-tertiary': '#F5F5F5',
        'ig-text-primary': '#262626',
        'ig-text-secondary': '#8E8E8E',
        'ig-text-tertiary': '#B2B2B2',
        'ig-border': '#DBDBDB',
        'ig-border-light': '#EFEFEF',
        'ig-error': '#ED4956',
        'ig-success': '#4CAF50',
        'ig-gradient-start': '#C13584',
        'ig-gradient-mid': '#E1306C',
        'ig-gradient-end': '#F77737',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'ig-card': '0 0 5px 1px rgba(0, 0, 0, 0.0975)',
        'ig-modal': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        slideUp: {
          from: { transform: 'translateY(40px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        heartBeat: 'heartBeat 300ms ease-out',
        slideUp: 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        fadeIn: 'fadeIn 200ms ease-in',
        scaleIn: 'scaleIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config