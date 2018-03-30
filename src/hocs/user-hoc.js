import React from 'react';
import { RoleContext } from "../context/user-context";

export function withRole(Component) {
  return function RoleComponent(props) {
    return (
      <RoleContext.Consumer>
        {role => <Component {...props} role={role} />}
      </RoleContext.Consumer>
    );
  };
}