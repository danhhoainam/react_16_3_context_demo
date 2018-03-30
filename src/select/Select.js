import React from 'react';
import {compose} from 'recompose';
import { withLang } from '../hocs/i18n-hoc';

const Select = ({ lang, onChange, value, options  }) => (
  <select onChange={onChange} value={value}>
    {
      options.map((option, index) => (
        <option key={index} value={option.value}>{lang[option.label]}</option>
      ))
    }
  </select>
);

export default compose(
  withLang
)(Select);