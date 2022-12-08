import React from 'react';
import NavigationMenu from '../navigation/NavigationMenu/NavigationMenu';
import MainHeader from './MainHeader/MainHeader';
import Routs from 'routs';

import classes from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={classes.layout_wrap}>
      <NavigationMenu />
      <div className={classes.layout_content}>
        <MainHeader />
        <main className={classes.layout_main}>
          <Routs />
        </main>
      </div>
    </div>
  );
};

export default Layout;
