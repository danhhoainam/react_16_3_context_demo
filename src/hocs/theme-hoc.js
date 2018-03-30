import React from 'react';
import { ThemeContext } from "../context/theme-context";

export function withTheme(Component) {
  return function ThemedComponent(props) {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
}