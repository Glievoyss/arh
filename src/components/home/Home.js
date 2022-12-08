import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { useAuthState } from '../../contexts/auth-context';

const Home = () => {
  const { auth } = useAuthState();
  return auth.isAuthenticated ? (
    <Redirect to="/start" />
  ) : (
    <Redirect to="/login" />
  );
};

export default withRouter(Home);
