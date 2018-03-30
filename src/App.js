import React, { Component } from 'react';
import styled from 'styled-components';
import { themes, ThemeContext } from './context/theme-context';
import AppHeader from './AppHeader';
import { roles, RoleContext } from './context/user-context';
import RoleDisplay from './RoleDisplay';
import Feeling from './Feeling';
import { langs, LanguageContext } from './context/i18n-context';

const StyledAppWrapper = styled.div`
  text-align: center;
`

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.primary,
      themeName: 'primary',
      role: roles.anonymous,
      roleName: 'anonymous',
      lang: langs.vietnamese,
      langName: 'vietnamese',
    }
  }

  handleChangeThemes = (event) => {
    event.preventDefault();
    this.setState({ theme: themes[event.target.value], themeName: event.target.value });
  }

  handleChangeRoles = (event) => {
    event.preventDefault();
    this.setState({ role: roles[event.target.value], roleName: event.target.value });
  }

  handleChangeLanguages = (event) => {
    event.preventDefault();
    this.setState({ lang: langs[event.target.value], langName: event.target.value });
  }

  render() {
    return (
      <StyledAppWrapper>
        <ThemeContext.Provider value={this.state.theme}>
          <RoleContext.Provider value={this.state.role}>
            <LanguageContext.Provider value={this.state.lang}>

              <AppHeader />

              <p>
                <select onChange={this.handleChangeThemes} value={this.state.themeName}>
                  <option value="primary">Primary</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </p>

              <p>
                <select onChange={this.handleChangeRoles} value={this.state.roleName}>
                  <option value="anonymous">Anonymous</option>
                  <option value="user">Slave</option>
                  <option value="admin">God</option>
                </select>
              </p>

              <p>
                <select onChange={this.handleChangeLanguages} value={this.state.lang}>
                  <option value="vietnamese">Vietnam</option>
                  <option value="english">English</option>
                </select>
              </p>

              <div>
                <RoleDisplay />
              </div>

              <div>
                <Feeling />
              </div>

            </LanguageContext.Provider>
          </RoleContext.Provider>
        </ThemeContext.Provider>
      </StyledAppWrapper>
    );
  }
}

export default App;
