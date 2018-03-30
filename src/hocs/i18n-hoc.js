import React from 'react';
import { LanguageContext } from "../context/i18n-context";

export function withLang(Component) {
  return function I18nComponent(props) {
    return (
      <LanguageContext.Consumer>
        {lang => <Component {...props} lang={lang} />}
      </LanguageContext.Consumer>
    );
  };
}