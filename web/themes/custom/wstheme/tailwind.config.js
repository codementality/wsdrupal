const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors');
const typography = require('@tailwindcss/typography')({
  modifiers: ['lg'],
});

module.exports = {
  important: false,
  darkMode: 'class',
  content: ['./safelist.txt', './source/**/*.twig', './source/**/*.yml', './apps/**/*.twig', './source/**/*.behavior.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#FFF',
      gray: {
        50: '#F7FAFC',
        60: '#E6EBED',
        70: '#C2CBD1',
        80: '#677885',
        90: '#101E2B',
      },
      primary: {
        60: '#25C1DE',
        70: '#1BA1CA',
        80: '#2580B5',
        90: '#235FA2',
        100: '#21418B',
      },
      secondary: {
        70: '#ED2C85',
        80: '#AD2F92',
        90: '#6D3C97',
        100: '#493E92',
      },
      semantic: {
        info: '#1BA1CA',
        success: '#20A154',
        warning: '#DF7F0E',
        error: '#ED4832',
      }
    },
    backgroundImage: {
      'none': 'none',
      'scrim-left-to-right': 'linear-gradient(0deg, rgba(35, 96, 162, 0.85) 0%, rgba(35, 96, 162, 0.1) 100%)',
      'scrim-right-to-left': 'linear-gradient(0deg, rgba(35, 96, 162, 0.1) 0%, rgba(35, 96, 162, 0.85) 100%)',
      'scrim-basic': 'linear-gradient(0deg, rgba(35, 96, 162, 0.5) 0%, rgba(35, 96, 162, 0.5) 100%)',
      'scrim-basic-light': 'linear-gradient(0deg, rgba(35, 96, 162, 0.375) 0%, rgba(35, 96, 162, 0.375) 100%)',
      'gradient-pink-to-light-blue': 'linear-gradient(106.32deg, rgba(237, 46, 133, 0.91) 3.89%, #6D3C97 26.4%, #1874B0 62.09%, rgba(37, 193, 222, 0.94) 92.98%)',
      'gradient-dark-blue-to-light-blue': 'linear-gradient(114.94deg, #23428D 9.76%, #1874B0 31.49%, #249AC7 67.1%, #25C1DE 99.11%)',
      'gradient-dark-blue-to-light-blue-curved': 'url(/images/curved-gradient.svg)',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            ul: {
              '> li': {
                '&::marker': {
                  color: theme('colors.primary.60')
                },
                'ul li': {
                  '&::marker': {
                    color: theme('colors.secondary.90')
                  },
                }
              }
            },
            ol: {
              '> li': {
                '&::marker': {
                  color: theme('colors.primary.100')
                }
              }
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.90'),
            '[class~="lead"]': {
              color: theme('colors.gray.90'),
            },
            blockquote: {
              color: theme('colors.gray.90'),
            },
            strong: {
              color: theme('colors.gray.90'),
            },
            h2: {
              color: theme('colors.gray.90'),
            },
            h3: {
              color: theme('colors.gray.90'),
            },
            h4: {
              color: theme('colors.gray.90'),
            },
            a: {
              color: theme('colors.secondary.90'),
              '&:hover': {
                color: theme('colors.secondary.80'),
                textDecoration: 'underline',
              },
              '&:focus': {
                color: theme('colors.secondary.80'),
                textDecoration: 'underline',
              },
              '&:visited': {
                color: theme('colors.secondary.100'),
              }
            },
          },
        },
      }),
      fill: {
        current: 'currentColor',
      },
      height: {
        18: '4.5rem',
      },
      maxWidth: {
        none: 'none',
        '7xl': '100rem',
        '8xl': '120rem',
      },
      gridTemplateColumns: {
        '33/66': '33% 66%',
        '66/33': '66% 33%',
        '25/50/25': '25% 50% 25%',
      },
    },
    fontFamily: {},
    fontSize: {
      '2xs': ['13px', '22.1px'],
      'xs': ['14px', '23.8px'],
      's': ['15px', '27.75px'],
      'm': ['18.75px', '34.69px'],
      'l': ['23.44px', '35.16px'],
      'xl': ['29.3px', '43.95px'],
      '2xl': ['36.62px', '49.44px'],
      '3xl': ['45.78px', '61.8px'],
    },
    spacing: {
      '0': '0',
      '0.5': '0.25rem',
      '1': '0.5rem',
      '1.5': '0.75rem',
      '2': '1rem',
      '2.5': '1.25rem',
      '3': '1.5rem',
      '4': '2rem',
      '5': '2.5rem',
      '5.5': '2.75rem',
      '6': '3rem',
      '7': '3.5rem',
      '8': '4rem',
      '9': '4.5rem',
      '10': '5rem',
      '11': '5.5rem',
      '12': '6rem',
      '13': '6.5rem',
      '14': '7rem',
      '15': '7.5rem',
      'gap': '1.5rem',
    },
    boxShadow: { // Keep boxShadow and dropShadow in sync
      'none': 'none',
      'skim': '0px 2px 3px rgba(14, 60, 103, 0.09)',
      'lifted': '0px 2px 8px rgba(14, 60, 103, 0.25)',
      'raised': '0px 4px 16px rgba(14, 60, 103, 0.25)',
      'floating': '0px 6px 24px rgba(14, 60, 103, 0.25)',
      'primary': '0px 6px 24px rgba(37, 193, 222, 0.5)',
      'secondary': '0px 6px 24px rgba(237, 46, 133, 0.5)',
      'input-focus': '0px 0px 0px 3px rgba(135, 165, 200, 0.5)',
    },
    dropShadow: { // Keep boxShadow and dropShadow in sync
      'none': 'none',
      'skim': '0px 2px 3px rgba(14, 60, 103, 0.09)',
      'lifted': '0px 2px 8px rgba(14, 60, 103, 0.25)',
      'raised': '0px 4px 16px rgba(14, 60, 103, 0.25)',
      'floating': '0px 6px 24px rgba(14, 60, 103, 0.25)',
      'primary': '0px 6px 24px rgba(37, 193, 222, 0.5)',
      'secondary': '0px 6px 24px rgba(237, 46, 133, 0.5)',
    },
    screens: {
      'xs': '400px',
      'max-xs': { 'max': '400px' },
      'sm': '600px',
      'max-sm': { 'max': '600px' },
      'md': '768px',
      'max-md': { 'max': '768px' },
      'lg': '1024px',
      'max-lg': { 'max': '1024px' },
      'xl': '1280px',
      'max-xl': { 'max': '1280px' },
      'xlp': '1312px', // Do not use. Needed only for container
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '12px',
      '12': '12px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    }
  },
  plugins: [forms, typography],
};
