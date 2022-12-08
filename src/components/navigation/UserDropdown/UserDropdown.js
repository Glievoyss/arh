import React from 'react';

import { logout } from 'contexts/actions/authActions';
import { useAuthState, useAuthDispatch } from 'contexts/auth-context';

import classes from './UserDropdown.module.scss';

const UserDropdown = () => {
  const { auth } = useAuthState();
  const dispatch = useAuthDispatch();
  const { user } = auth;

  const onSubmit = e => {
    e.preventDefault();
    logout()(dispatch);
  };

  return (
    <div className={classes.base}>
      <button onClick={onSubmit}>
        {`${user.firstName} ${user.lastName} Log Out`}
      </button>
    </div>
  );
};

export default UserDropdown;
