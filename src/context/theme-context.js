import React from 'react';

export const themes = {
  primary: {
    background: '#ed2324',
    color: '#000000',
    colorText: 'black',
  },
  light: {
    background: '#ff624f',
    color: '#000000',
    colorText: 'blue',
  },
  dark: {
    background: '#b20000',
    color: '#ffffff',
    colorText: 'yellow',
  },
}

export const ThemeContext = React.createContext(
  themes.primary,
);

