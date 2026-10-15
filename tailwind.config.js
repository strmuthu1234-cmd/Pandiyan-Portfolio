/** Colours and fonts extracted from the original portfolio CSS. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: '#0d1428',
        surface2: '#111a33',
        line: '#1e2a44',
        ink: '#f8fafc',
        muted: '#94a3b8',
        accent: '#00cfff',
        blue: '#2f6bff',
        violet: '#7c3aed',
        ok: '#22c55e',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0,207,255,.25), 0 8px 40px -8px rgba(0,207,255,.35)',
      },
    },
  },
  plugins: [],
}
