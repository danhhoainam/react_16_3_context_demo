import React, { Component } from 'react';
import styled from 'styled-components';
import { themes, ThemeContext } from './context/theme-context';
import AppHeader from './AppHeader';
import { roles, RoleContext } from './context/user-context';
import RoleDisplay from './RoleDisplay';
import Feeling from './Feeling';
import { langs, LanguageContext } from './context/i18n-context';
import Select from './select/Select';

const StyledAppWrapper = styled.div`
  text-align: center;
`;

const themeOptions = [
  {
    value: 'primary',
    label: 'primary',
  },
  {
    value: 'light',
    label: 'light',
  },
  {
    value: 'dark',
    label: 'dark',
  }
];

const roleOptions = [
  {
    value: 'anonymous',
    label: 'label_anonymous',
  },
  {
    value: 'user',
    label: 'label_user',
  },
  {
    value: 'admin',
    label: 'label_admin',
  }
];

const langOptions = [
  {
    value: 'vietnamese',
    label: 'label_vietnamese',
  },
  {
    value: 'english',
    label: 'label_english',
  }
];

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
                <Select onChange={this.handleChangeThemes} value={this.state.themeName} options={themeOptions} />
              </p>

              <p>
                <Select onChange={this.handleChangeRoles} value={this.state.roleName} options={roleOptions} />
              </p>

              <p>
                <Select onChange={this.handleChangeLanguages} value={this.state.lang} options={langOptions} />
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
