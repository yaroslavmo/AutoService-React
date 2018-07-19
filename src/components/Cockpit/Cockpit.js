import React from 'react'

import Aux from '../../hoc/Aux'
import classes from './Cockpit.css'


const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showClients) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.clients.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.clients.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <Aux>
            <p className={assignedClasses.join(' ')}>Oo</p>
            <button className={btnClass}
                    onClick={props.clicked}>Toggle Clients
            </button>
            <button onClick={props.login}>Log in</button>
        </Aux>
    );
};
export default cockpit;