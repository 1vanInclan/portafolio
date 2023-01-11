module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // fontFamily: {
    //   primary: 'Work Sans',
    //   body: 'Work Sans',
    // },
    fontFamily: {
      primary: 'Open Sans',
      body: 'Open Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#041C32',
        secondary: '#04293A',
        tertiary: '#064663',
        accent: {
          DEFAULT: '#ECB365',
          // hover: '#aba43e',
          hover: '#041C32',
        },
        // paragraph: '#878e99',
        paragraph: '#e8e6e6',
      },
    },
  },
  plugins: [],
};

// primary: '#050402',
// secondary: '#1C1D24',
// tertiary: '#131419',
// accent: {
//   DEFAULT: '#3462ac',
//   hover: '#2b6292',
// },
// paragraph: '#878e99',
// },