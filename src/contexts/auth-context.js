import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

import { authInitState } from './initialStates';
import authReducer from './reducers/authReducer';
const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, authInitState);
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
}

function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node
};

export { AuthProvider, useAuthState, useAuthDispatch };
