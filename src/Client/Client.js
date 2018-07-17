import React from 'react';

import './Client.css'


const client = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width:'450px'
        }
    };
    return (
        <div className="Client" style={style}>
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