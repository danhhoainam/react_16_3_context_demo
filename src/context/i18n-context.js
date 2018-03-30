import React from 'react';

export const langs = {
  vietnamese: {
    love: 'Anh yeu em',
    hate: 'Tao ghet may',
    god: 'Tao la Thanh day',
    view: 'Tao co the xem ne',
    edit: 'Tao co the sua ne',
    delete: 'Tao co the xoa ne',
    add: 'Tao co the them ne',
    happy: 'Cuoc doi van dep sao, tinh yeu van dep sao',
    sad: 'Troi sinh redux sao con sinh context',
  },
  english: {
    love: 'i love you',
    hate: 'Fuck off, dickhead!!!',
    god: 'I am God Almighty, do not give a shit',
    view: 'I can view',
    edit: 'I can edit',
    delete: 'I can delete',
    add: 'I can add',
    happy: 'Super duper fun',
    sad: 'I hate this world',
  }
}

export const LanguageContext = React.createContext(
  langs.vietnamese,
);

