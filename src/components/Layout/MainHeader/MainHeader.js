import React from 'react';
import { useLocation } from 'react-router-dom';

import UserDropdown from '../../navigation/UserDropdown/UserDropdown';

// import { useAuthState } from 'contexts/auth-context';

import classes from './MainHeader.module.scss';

const MainHeader = () => {
  // const { auth } = useAuthState();

  let location = useLocation();

  if (location.pathname.indexOf('login') !== -1) {
    return <></>;
  }
  return (
    <header className={classes.header}>
      <UserDropdown />
    </header>
  );
};

export default MainHeader;
