import React from 'react';
import { useLocation } from 'react-router-dom';

import classes from './NavigationMenu.module.scss';

const NavigationMenu = () => {
  let location = useLocation();
  if (location.pathname.indexOf('/login') !== -1) {
    return <></>;
  }
  return (
    <div className={classes.nav}>
      <div>
        <p>LOGO</p>
      </div>
      <nav>Menu</nav>
    </div>
  );
};

export default NavigationMenu;
