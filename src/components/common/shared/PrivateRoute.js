/* eslint react/prop-types: 0 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthState } from 'contexts/auth-context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuthState();
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default PrivateRoute;
