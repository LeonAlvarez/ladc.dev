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
};

export { darkTheme, lightTheme }