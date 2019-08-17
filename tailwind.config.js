const allVariants = [
  'responsive',
  'hover',
  'focus',
  'active',
  'group-hover',
  'focus-within',
  'first',
  'last',
  'not-first',
  'not-last',
]
const allProperties = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'appearance',
  'backgroundAttachment',
  'backgroundColor',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'borderCollapse',
  'borderColor',
  'borderRadius',
  'borderStyle',
  'borderWidth',
  'boxShadow',
  'cursor',
  'display',
  'fill',
  'flex',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'float',
  'fontFamily',
  'fontSize',
  'fontSmoothing',
  'fontStyle',
  'fontWeight',
  'height',
  'inset',
  'justifyContent',
  'letterSpacing',
  'lineHeight',
  'listStylePosition',
  'listStyleType',
  'margin',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'objectFit',
  'objectPosition',
  'opacity',
  'order',
  'outline',
  'overflow',
  'padding',
  'pointerEvents',
  'position',
  'resize',
  'stroke',
  'tableLayout',
  'textAlign',
  'textColor',
  'textDecoration',
  'textTransform',
  'userSelect',
  'verticalAlign',
  'visibility',
  'whitespace',
  'width',
  'wordBreak',
  'zIndex',
]

let allPropertiesWithVariants = {}

allProperties.forEach((property) => {
  allPropertiesWithVariants[property] = allVariants
})

const spacingScreenWidth = {
  screen: '100vw',
  'screen-1/2': '50vw',
  'screen-1/3': '33.33333vw',
  'screen-2/3': '66.66667vw',
  'screen-1/4': '25vw',
  'screen-2/4': '50vw',
  'screen-3/4': '57vw',
}

const spacingScreenHeight = {
  screen: '100vh',
  'screen-1/2': '50vh',
  'screen-1/3': '33.33333vh',
  'screen-2/3': '66.66667vh',
  'screen-1/4': '25vh',
  'screen-2/4': '50vh',
  'screen-3/4': '57vh',
}

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1400px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      social: {
        twitter: '#55acee',
        linkedin: '#0077b5',
        facebook: '#3b5998',
      },

      orange: {
        100: '#FFE4BB',
        200: '#FFC673',
        300: '#FFAF3A',
        400: '#FF9800',
        500: '#E88A00',
        600: '#BD7203',
        700: '#905600',
        800: '#6F4404',
        900: '#5B3600',
        darkest: '#4B2D01',
      },
      blue: {
        100: '#DFEEFB',
        200: '#BCE0FD',
        300: '#8FC5F3',
        400: '#71B0E6',
        500: '#5398D6',
        600: '#3D80C1',
        700: '#306FAE',
        800: '#276199',
        900: '#21568B',
        1000: '#133F6A',
      },
      cyan: {
        100: '#E6FBF8',
        200: '#CDFCF6',
        300: '#AAFAF2',
        400: '#89F1EA',
        500: '#71E4E0',
        600: '#60D1D2',
        700: '#50B2B8',
        800: '#4298A2',
        900: '#367F8D',
        1000: '#004E54',
      },
      gray: {
        100: '#F7F7F7',
        200: '#E1E1E1',
        300: '#CFCFCF',
        400: '#B1B1B1',
        500: '#9E9E9E',
        600: '#7E7E7E',
        700: '#626262',
        800: '#515151',
        900: '#3B3B3B',
        1000: '#222222',
      },
      red: {
        100: '#FCEFEE',
        200: '#F5CECE',
        300: '#E99D9C',
        400: '#DA6E6D',
        500: '#CA4B49',
        600: '#AF2E2A',
        700: '#9C2421',
        800: '#881917',
        900: '#701210',
        1000: '#5A0A0A',
      },
      yellow: {
        100: '#FEFBEA',
        200: '#FDF3C5',
        300: '#F9E48B',
        400: '#F6DA65',
        500: '#F1C950',
        600: '#E9B435',
        700: '#D6922A',
        800: '#C27023',
        900: '#AB501C',
        1000: '#852E13',
      },
      green: {
        100: '#F3FCE0',
        200: '#E5F6C3',
        300: '#CCE891',
        400: '#B2D962',
        500: '#9CC647',
        600: '#52B100',
        700: '#508F43',
        800: '#00823C',
        900: '#225715',
        1000: '#153F0B',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      },
      purple: {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
      },
      pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
      },
    },
    spacing: {
      auto: 'auto',
      px: '1px',
      'px-2': '2px',
      'px-3': '3px',
      'px-4': '4px',
      'px-5': '5px',
      'px-6': '6px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '88': '22rem',
      '96': '24rem',
      '104': '26rem',
      '112': '28rem',
      '120': '30rem',
      '128': '32rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '2/6': '33.33333%',
      '3/6': '50%',
      '4/6': '66.66667%',
      '5/6': '83.33333%',
      '1/12': '8.33333%',
      '2/12': '16.66667%',
      '3/12': '25%',
      '4/12': '33.33333%',
      '5/12': '41.66667%',
      '6/12': '50%',
      '7/12': '58.33333%',
      '8/12': '66.66667%',
      '9/12': '75%',
      '10/12': '83.33333%',
      '11/12': '91.66667%',
      full: '100%',
      'screen-w-full': '100vw',
      'screen-w-1/2': '50vw',
      'screen-w-1/3': '33.33333vw',
      'screen-w-2/3': '66.66667vw',
      'screen-w-1/4': '25vw',
      'screen-w-2/4': '50vw',
      'screen-w-3/4': '75vw',
      'screen-h-full': '100vh',
      'screen-h-1/2': '50vh',
      'screen-h-1/3': '33.33333vh',
      'screen-h-2/3': '66.66667vh',
      'screen-h-1/4': '25vh',
      'screen-h-2/4': '50vh',
      'screen-h-3/4': '75vh',
    },
    backgroundColor: (theme) => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      lg: '0.5rem',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      sans: [
        'Open Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.8325rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',
    },
    width: (theme) => ({
      ...theme('spacing'),
      ...spacingScreenWidth,
    }),
    height: (theme) => ({
      ...theme('spacing'),
      ...spacingScreenHeight,
    }),
    margin: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    padding: (theme) => theme('spacing'),
    maxHeight: (theme) => ({
      ...theme('spacing'),
      ...spacingScreenHeight,
    }),
    maxWidth: (theme) => ({
      ...theme('spacing'),
      ...spacingScreenWidth,
    }),
    minHeight: (theme) => ({
      ...theme('spacing'),
      ...spacingScreenHeight,
    }),
    minWidth: (theme) => ({
      ...theme('spacing'),
      ...spacingScreenWidth,
    }),
    inset: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
    stroke: {
      current: 'currentColor',
    },
    textColor: (theme) => theme('colors'),
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
  },
  variants: allPropertiesWithVariants,
  corePlugins: {},
  plugins: [
    function({ addVariant, e }) {
      addVariant('first', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`first${separator}${className}`)}:first-child`
        })
      })
    },
    function({ addVariant, e }) {
      addVariant('last', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`last${separator}${className}`)}:last-child`
        })
      })
    },
    function({ addVariant, e }) {
      addVariant('not-first', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`not-first${separator}${className}`)}:not(:first-child)`
        })
      })
    },
    function({ addVariant, e }) {
      addVariant('not-last', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`not-last${separator}${className}`)}:not(:last-child)`
        })
      })
    },
  ],
}
