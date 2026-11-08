import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg': {
          page: '#FFFFFF',
          alt: '#F5F5F7',
          card: '#FFFFFF',
          'chapter-dark': '#000000',
        },
        'surface': {
          dark: '#1D1D1F',
        },
        'text': {
          primary: '#1D1D1F',
          secondary: '#5A5A5E',
          tertiary: '#767676',
        },
        'accent': {
          fill: '#0059D6',
          hover: '#0066E3',
          pressed: '#005AC9',
        },
        'link': '#0066CC',
        'separator': '#C7C7CC',
        'status': {
          dot: '#34C759',
        },
        'dark-bg': {
          page: '#000000',
          alt: '#161617',
          card: '#1D1D1F',
        },
        'dark-text': {
          primary: '#F5F5F7',
          secondary: '#AEAEB2',
        },
        'dark-link': '#2997FF',
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '52px' }],
        '6xl': ['60px', { lineHeight: '66px' }],
        
        // Semantic tokens with fluid sizing using clamp()
        'eyebrow': ['clamp(12px, 0.75vw, 14px)', { lineHeight: '16px', letterSpacing: '0.06em', fontWeight: '600', textTransform: 'uppercase' }],
        'caption': ['clamp(13px, 0.8vw, 14px)', { lineHeight: '20px' }],
        'body': ['clamp(15px, 1vw, 17px)', { lineHeight: '28px' }],
        'body-lg': ['clamp(17px, 1.1vw, 19px)', { lineHeight: '28px' }],
        'lead': ['clamp(18px, 1.3vw, 22px)', { lineHeight: '32px' }],
        'card-title': ['clamp(20px, 1.5vw, 26px)', { lineHeight: '32px', fontWeight: '600' }],
        'subhead': ['clamp(28px, 2.2vw, 36px)', { lineHeight: '40px', fontWeight: '600' }],
        'section': ['clamp(36px, 3.5vw, 52px)', { lineHeight: '56px', fontWeight: '600' }],
        'hero': ['clamp(48px, 6vw, 72px)', { lineHeight: '72px', fontWeight: '600', letterSpacing: '-0.02em' }],
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '120': '120px',
      },
      borderRadius: {
        'large': '28px',
        'medium': '18px',
        'small': '12px',
        'full': '980px',
      },
      maxWidth: {
        'container': '1200px',
        'text': '980px',
        'reading': '692px',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'pulse-subtle': 'pulseSubtle 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
