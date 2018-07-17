import React from 'react';

import classes from './Client.css'


const client = (props) => {
    return (
        <div className={classes.Client}>
            <p id="client-id"> {props.id} </p>
            <p id="client-first-name"> {props.firstName} </p>
            <p id="client-last-name"> {props.lastName} </p>
            <p id="client-email"> {props.email} </p>
            <p className="text-right">
                <button type="button" className="close text-right" aria-label="Close" id="delete-client"
                        onClick={props.deleteClient}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </p>
        </div>
    )
};

export default client;