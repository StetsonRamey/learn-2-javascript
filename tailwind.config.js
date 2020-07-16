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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        headingtext: 'var(--color-textHeading)',
        paragraphtext: 'var(--color-textParagraph)',
        lighttext: 'var(--color-textLight)',
        bgGray: 'var(--color-bgGray)',
        demoBorder: 'var(--color-demoBorderGrn)',
        demoTxt: 'var(--color-demoBorderTxt)',
        link: 'var(--color-link)',
        linkHover: 'var(--color-linkHover)',
        blockquoteBorder: 'var(--color-blockquoteBorder)',
        blockquotebg: 'var(--color-blockquotebg)',
        calloutBg: 'var(--color-callout)',
        calloutBorder: 'var(--color-calloutBorder)',
      },
      gridTemplateColumns: {
        '2': '1.5rem 1fr 13.5rem 2.5rem',
        'content-grid': '1fr minmax(auto,49em) 1fr',
        'post-display': '200px 4fr 2fr',
        post: '3fr 1fr',
      },
      inset: {
        '1/2': '50%',
      },
      flex: {
        '1/2': '0 0 calc(50% - 2rem)',
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
    borderWidth: ['responsive', 'hover', 'focus'],
    textColor: ['hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    padding: ['first', 'last', 'responsive'],
    margin: ['first', 'last', 'responsive'],
  },
  plugins: [
    require('tailwindcss-dark-mode')(), // https://github.com/ChanceArthur/tailwindcss-dark-mode
  ],
};
