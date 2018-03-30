import React from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { withRole } from './hocs/user-hoc';
import { withLang } from './hocs/i18n-hoc';
import { withTheme } from './hocs/theme-hoc';

const StyledText = styled.div`
  color: ${(props) => props.theme.colorText ? props.theme.colorText : 'red'};
  background-color: ${(props) => props.theme.background ? props.theme.background : 'grey'};
`;

const Feeling = ({ theme, role, lang }) => (
  <div>
    <StyledText theme={theme}>Happy quote: {lang.happy}</StyledText>
    <StyledText theme={theme}>Sad quote: {lang.sad}</StyledText>

    {
      role.edit && (<StyledText theme={theme}>Edit quote: {lang.edit}</StyledText>)
    }
  </div>
)

export default compose(
  withTheme,
  withRole,
  withLang
)(Feeling);