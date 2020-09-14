import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    // ...
    return (
        <div className={classes.SideDrawer}>
<<<<<<< HEAD
            <div className={classes.Logo}>
                <Logo/>
            </div>
=======
            <Logo />
>>>>>>> 7ee5de2ca834cf40e1ddbd1cf8511ce0c68028e7
            <nav>
                <NavigationItems />
            </nav>

        </div>
    );
}

export default sideDrawer;