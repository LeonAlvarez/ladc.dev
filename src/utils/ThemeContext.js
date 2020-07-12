import React from 'react';
import { lightTheme, darkTheme } from './themes';

const ThemeContext = React.createContext({
  currentTheme: darkTheme,
  transition: '0.5s',
  toggleTheme: () => { },
});

class ThemeContextWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState({
        currentTheme:
          this.state.currentTheme === lightTheme ? darkTheme : lightTheme,
      });
    };

    this.state = {
      currentTheme: darkTheme,
      transition: '0.5s',
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextWrapper;
export { ThemeContext };