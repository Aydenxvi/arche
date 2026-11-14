export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F6F3ED',
        bone: '#EDE8DE',
        stone: '#D8D1C4',
        sand: '#C4B9A6',
        clay: '#A89A85',
        olive: '#6B6E5C',
        bronze: '#9C7B4E',
        brass: '#C9B38A',
        warm: '#8C867C',
        graphite: '#262522',
        charcoal: '#171614',
        ink: '#0C0B0A',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.2rem, 11vw, 11.5rem)', { lineHeight: '0.88', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.6rem, 7.4vw, 7.2rem)', { lineHeight: '0.94', letterSpacing: '-0.022em' }],
        'display-md': ['clamp(2.1rem, 4.6vw, 4.2rem)', { lineHeight: '1.02', letterSpacing: '-0.018em' }],
        'display-sm': ['clamp(1.6rem, 2.8vw, 2.6rem)', { lineHeight: '1.1', letterSpacing: '-0.012em' }],
        lede: ['clamp(1.05rem, 1.5vw, 1.4rem)', { lineHeight: '1.55', letterSpacing: '-0.004em' }],
        micro: ['0.6875rem', { lineHeight: '1.3', letterSpacing: '0.18em' }],
        label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        shell: '1680px',
        prose: '68ch',
      },
      spacing: {
        section: 'clamp(5rem, 11vw, 11rem)',
        gutter: 'clamp(1.25rem, 4vw, 4.5rem)',
      },
      transitionTimingFunction: {
        arch: 'cubic-bezier(0.22, 1, 0.36, 1)',
        swift: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(14px)' }, '100%': { opacity: '1', transform: 'none' } },
        drift: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(6px)' } },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        drift: 'drift 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
