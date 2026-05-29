/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F4ECE0',
          raised: '#FBF6EC',
          sunk: '#EBE0CF',
          deep: '#E3D6C0',
        },
        ink: {
          DEFAULT: '#1C1B19',
          soft: '#6B6358',
          faint: '#9A917F',
        },
        line: {
          DEFAULT: '#D9CDB8',
          strong: '#C7B79C',
        },
        salmon: {
          DEFAULT: '#E8745B',
          deep: '#C2503A',
          tint: '#F6D8CE',
        },
        sage: {
          DEFAULT: '#5E7A5B',
          deep: '#3F5A3D',
          tint: '#D9E4D3',
        },
        gold: {
          DEFAULT: '#B0863C',
          tint: '#EFE0BE',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      boxShadow: {
        card: '0 1px 0 rgba(28,27,25,0.04), 0 12px 30px -18px rgba(28,27,25,0.35)',
        lift: '0 18px 50px -22px rgba(28,27,25,0.5)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      backgroundImage: {
        'ledger-lines':
          'repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(199,183,156,0.35) 31px, rgba(199,183,156,0.35) 32px)',
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
