import React from 'react';

import classes from './BuildControls.css';
import Buildcontrol from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'Bacon' },
    { label: 'Cheese', type: 'Cheese' },
    { label: 'Meat', type: 'Meat' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <Buildcontrol key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;