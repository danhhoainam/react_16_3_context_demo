import React from 'react';

export const roles = {
  anonymous: {
    view: true,
    delete: false,
    edit: false,
    add: false,
  },
  user: {
    view: true,
    delete: false,
    edit: true,
    add: true,
  },
  admin: {
    god: true,
  },
}

export const RoleContext = React.createContext(
  roles.anonymous,
);

