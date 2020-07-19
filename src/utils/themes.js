const headings = {
  1: {
    fontSize: '3rem',
    fontWeight: 600,
  },
  2: {
    fontSize: '2.75rem',
    fontWeight: 600,
  },
  3: {
    fontSize: '4rem',
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
  bgColor: '#00173a',
  lightBgColor: 'hsl(216, 10%, 90%, 1)',
  header: {
    bgColor: '#00173a',
    textColor: 'hsl(216, 10%, 90%, 1)',
    accentColor: 'hsla(216, 80%, 41%, 1)'
  },
  footer: {
    bgColor: '#00173a',
    textColor: 'hsl(216, 20%, 80%, 1)',
    accentColor: 'hsla(216, 80%, 41%, 1)'
  },
  textColor: '#00173a',
  lightTextColor: 'hsl(216, 20%, 80%, 1)',
  accentColor: '#6128d3',
  headings,
  buttons: {
    primary: {
      bgColor: '#00173a',
      color: 'hsl(216, 20%, 80%, 1)',
    },
    secondary: {
      bgColor: 'hsl(216, 20%, 80%, 1)',
      color: '#00173a',
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
  fontFamilies: {
    monoSpace: 'Inconsolata',
    text: 'Poppins',
    title: 'Ubuntu'
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  }
};

export { darkTheme, lightTheme }