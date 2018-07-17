import React from 'react'

import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showClients) {
        btnClass = classes.Red;
    }

    if (props.clients.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.clients.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>Oo</p>
            <button className={btnClass}
                    onClick={props.clicked}>Toggle Clients
            </button>
        </div>
    );
};
export default cockpit;