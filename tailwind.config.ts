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
        // Light theme
        'bg': {
          page: '#FFFFFF',
          alt: '#F5F5F7',
          'card': '#FFFFFF',
          'chapter-dark': '#000000',
        },
        'surface': {
          dark: '#1D1D1F',
        },
        'text': {
          primary: '#1D1D1F',
          secondary: '#6E6E73',
          tertiary: '#86868B',
        },
        'accent': {
          fill: '#0071E3',
          hover: '#0077ED',
          pressed: '#006EDB',
        },
        'link': '#0066CC',
        'separator': '#D2D2D7',
        'status': {
          dot: '#34C759',
        },
        // Dark theme
        'dark-bg': {
          page: '#000000',
          alt: '#161617',
          card: '#1D1D1F',
        },
        'dark-text': {
          primary: '#F5F5F7',
          secondary: '#A1A1A6',
        },
        'dark-link': '#2997FF',
      },
      fontSize: {
        // Hero display: 80/84, 56/60, 40/44
        'hero': ['80px', { lineHeight: '84px', letterSpacing: '-0.015em' }],
        'hero-tablet': ['56px', { lineHeight: '60px', letterSpacing: '-0.015em' }],
        'hero-mobile': ['40px', { lineHeight: '44px', letterSpacing: '-0.015em' }],
        
        // Section headline: 56/60, 44/48, 32/36
        'section': ['56px', { lineHeight: '60px', letterSpacing: '-0.01em' }],
        'section-tablet': ['44px', { lineHeight: '48px', letterSpacing: '-0.01em' }],
        'section-mobile': ['32px', { lineHeight: '36px', letterSpacing: '-0.01em' }],
        
        // Subhead: 40/44, 32/36, 24/28
        'subhead': ['40px', { lineHeight: '44px', letterSpacing: '-0.01em' }],
        'subhead-tablet': ['32px', { lineHeight: '36px', letterSpacing: '-0.01em' }],
        'subhead-mobile': ['24px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
        
        // Card title: 28/32, 24/28, 21/25
        'card-title': ['28px', { lineHeight: '32px' }],
        'card-title-tablet': ['24px', { lineHeight: '28px' }],
        'card-title-mobile': ['21px', { lineHeight: '25px' }],
        
        // Lead: 28/32, 24/28, 19/24
        'lead': ['28px', { lineHeight: '32px' }],
        'lead-tablet': ['24px', { lineHeight: '28px' }],
        'lead-mobile': ['19px', { lineHeight: '24px' }],
        
        // Body large: 21/25
        'body-lg': ['21px', { lineHeight: '25px' }],
        
        // Body: 17/25
        'body': ['17px', { lineHeight: '25px', letterSpacing: '-0.022em' }],
        
        // Post body: 19/32
        'post': ['19px', { lineHeight: '32px' }],
        
        // Caption: 14/20
        'caption': ['14px', { lineHeight: '20px' }],
        
        // Eyebrow: 12/16
        'eyebrow': ['12px', { lineHeight: '16px', letterSpacing: '0.06em', fontWeight: '600', textTransform: 'uppercase' }],
        
        // Button: 17/21
        'button': ['17px', { lineHeight: '21px' }],
        
        // Price: 21/25
        'price': ['21px', { lineHeight: '25px', fontWeight: '600' }],
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
      },
      spacing: {
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        24: '24px',
        32: '32px',
        48: '48px',
        64: '64px',
        80: '80px',
        120: '120px',
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
      backdropBlur: {
        'nav': '20px',
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
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.28, 0.11, 0.32, 1)',
        'out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        'micro': '150ms',
        'ui': '250ms',
        'reveal': '600ms',
        'hero': '900ms',
      },
    },
  },
  plugins: [],
};

export default config;
