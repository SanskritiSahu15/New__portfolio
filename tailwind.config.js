/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace'
        ]
      },
      colors: {
        // Bold "Coder" orange — the single accent across the dark UI.
        brand: {
          50: '#fff3ed',
          100: '#ffe3d3',
          200: '#ffc1a3',
          300: '#ff9568',
          400: '#ff6a35',
          500: '#fa5a1e',
          600: '#e84309',
          700: '#bf340a',
          800: '#982c10',
          900: '#7a2810',
          950: '#421106'
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        'float-sm': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' }
        },
        'scroll-down': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '40%': { opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.75' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-sm': 'float-sm 4.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
        'spin-slow-reverse': 'spin-slow 34s linear infinite reverse',
        'scroll-down': 'scroll-down 1.7s ease-in-out infinite',
        shimmer: 'shimmer 7s linear infinite',
        marquee: 'marquee 28s linear infinite',
        'glow-pulse': 'glow-pulse 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
