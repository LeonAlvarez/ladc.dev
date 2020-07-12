const headings = {
  1: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  2: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  3: {
    fontSize: '2rem',
    fontWeight: 600,
  },
  4: {
    fontSize: '2rem',
    fontWeight: 600,
  }
}

const lightTheme = {
  transition: '0.37s',
  mainBgColor: '#f9f9f9',
  header: {
    bgColor: '#f9f9f9',
    textColor: '#05233b',
    accentColor: '#3490dc'
  },
  textColor: '#05233b',
  accentColor: '#6128d3',
  headings
};

const darkTheme = {
  transition: '0.37s',
  bgColor: '#05233b',
  lightBgColor: '#f9f9f9',
  header: {
    bgColor: '#05233b',
    textColor: '#f9f9f9',
    accentColor: '#3490dc'
  },
  textColor: '#05233b',
  lightTextColor: '#f9f9f9',
  accentColor: '#6128d3',
  headings,
  buttons: {
    primary: {
      bgColor: '#05233b',
      color: '#f9f9f9',
    },
    secondary: {
      bgColor: '#f9f9f9',
      color: '#05233b',
    },
  },
  buttonsSize: {
    small: {
      fontSize: '0.75rem',
      fontWeight: 400,
      padding: '0.25rem 0.75rem',
    },
    normal: {
      fontSize: '1rem',
      fontWeight: 500,
      padding: '0.5rem 1rem',
    }
  },
  borderRadius: {
    rounded: '0.25rem'
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  }
};

export { darkTheme, lightTheme }