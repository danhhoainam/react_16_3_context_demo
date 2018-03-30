// vendor
import React from 'react';
import styled from 'styled-components';

// app
import { ThemeContext } from './context/theme-context';
import logo from './logo.svg';

const StyledAppHeader = styled.header`
  background-color: ${(props) => props.theme ? `${props.theme.background};` : '#222;'};
  color: ${(props) => props.theme ? `${props.theme.color};` : 'white;'};
  height: 150px;
  padding: 20px;
`;

const StyledIcon = styled.img`
  @keyframes logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  animation: logo-spin infinite 20s linear;
  height: 80px;
`;

const StyledTitle = styled.h1`
  font-size: 1.5em;
`

const AppHeader = (props) => {
  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <StyledAppHeader theme={theme} {...props}>
            <StyledIcon src={logo} alt="logo" />
            <StyledTitle>Welcome to React Context demo</StyledTitle>
          </StyledAppHeader>
        )
      }
    </ThemeContext.Consumer>
  )
};

export default AppHeader;

