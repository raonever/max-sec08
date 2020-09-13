import React from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = ( props ) => (
    <Auxiliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        {/* Auxiliary의 기능 */}
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;