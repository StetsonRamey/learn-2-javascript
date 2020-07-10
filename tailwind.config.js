const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./dist/**/*.html'],
    whitelist: ['dark-mode'],
  },
  theme: {
    // Replaces default settings or add new settings
    container: {
      center: true,
    },
    darkSelector: '.dark-mode',
    // Extends default settings
    extend: {
      boxShadow: {
        nav: '0 3px 13px rgba(100,110,140,.1),0 2px 4px rgba(100,110,140,.15)',
      },
      fontFamily: {
        // Use Tailwind default serif fonts with font-display
        display: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        bodybg: 'var(--color-bodybg)',
        muted: 'var(--color-muted)',
        bodytext: 'var(--color-primaryBlack)',
        bodytextMute: 'var(--color-gray)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        links: 'var(--color-links)',
        focus: 'var(--color-focus)',
        primaryBlack: 'var(--color-primaryBlack)',
        secondaryBlack: 'var(--color-secondaryBlack)',
        mute: 'var(--color-mute)',
        primaryGreen: 'var(--color-primaryGreen)',
        secondaryGreen: 'var(--color-secondaryGreen)',
        tealish: 'var(--color-tealish)',
        primaryPink: 'var(--color-primaryPink)',
        secondaryPink: 'var(--color-secondaryPink)',
        blockquoteBorder: 'var(--color-blockquoteBorder)',
        blockquotebg: 'var(--color-blockquotebg)',
      },
      gridTemplateColumns: {
        '2': '1.5rem 1fr 13.5rem 2.5rem',
        'content-grid': '1fr minmax(auto,31em) 1fr',
        'post-display': '200px 4fr 2fr',
      },
    },
  },
  variants: {
    backgroundColor: [
      'hover',
      'group-hover',
      'focus',
      'dark',
      'dark-hover',
      'dark-focus',
    ],
    borderColor: ['hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    textColor: ['hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    padding: ['first', 'last', 'responsive'],
    margin: ['first', 'last', 'responsive'],
  },
  plugins: [
    require('tailwindcss-dark-mode')(), // https://github.com/ChanceArthur/tailwindcss-dark-mode
  ],
};
