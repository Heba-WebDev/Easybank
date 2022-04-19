module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
     sm:'480px',
     md: '768px',
     lg: '976px',
     xl: '1840px',
    },
    extend: {
      colors: {
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
        grayishBlue: 'hsl(233, 8%, 62%)',
        lightGrayish: 'hsl(220, 16%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      backgroundImage: {
        'herodesktop': "url('/images/bg-intr0-desktop')",
        'heromobile': "url('/images/bg-intro-mobile.svg')",
      }
    },
  },
  plugins: [],
}
