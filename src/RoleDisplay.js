import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from './context/theme-context';
import { LanguageContext } from './context/i18n-context';
import { RoleContext } from './context/user-context';

const StyledText = styled.div`
  color: ${(props) => props.theme.colorText ? props.theme.colorText : 'red' };
`;

class RoleDisplay extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          theme => (
            <LanguageContext.Consumer>
              {
                lang => (
                  <RoleContext.Consumer>
                    {
                      role => (
                        <div>
                          {role.god && (<StyledText theme={theme}>{lang.god}</StyledText>)}
                          {role.view && (<StyledText theme={theme}>{lang.view}</StyledText>)}
                          {role.delete && (<StyledText theme={theme}>{lang.delete}</StyledText>)}
                          {role.edit && (<StyledText theme={theme}>{lang.edit}</StyledText>)}
                          {role.add && (<StyledText theme={theme}>{lang.add}</StyledText>)}
                        </div>
                      )
                    }
                  </RoleContext.Consumer>
                )
              }
            </LanguageContext.Consumer>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

export default RoleDisplay;