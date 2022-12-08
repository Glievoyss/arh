import React, { useState, useEffect } from 'react';
import { useAuthState, useAuthDispatch } from 'contexts/auth-context';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

import { isValid } from './validation';
import { login } from 'contexts/actions/authActions';

// import classes from './Login.module.scss';

const Login = ({ history }) => {
  const { auth } = useAuthState();
  const dispatch = useAuthDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation('activity');

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/start');
    }
    if (!auth.isAuthenticated && auth.isLogin) {
      console.log('Wrong PASSWORD');
    }
  }, [auth, history, t]);

  const onSubmit = e => {
    e.preventDefault();
    if (isValid(password)) {
      login({ email, password })(dispatch);
    } else {
      console.log('Not valid PASS');
    }
  };

  const onEmail = e => {
    setEmail(e.target.value);
  };

  const onPassword = e => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={email} onChange={onEmail} placeholder={'email'} />
        <input
          value={password}
          onChange={onPassword}
          placeholder={'PASS'}
          type="password"
        />
        <button type="submit">
          <span>{'login'}</span>
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

export default Login;
