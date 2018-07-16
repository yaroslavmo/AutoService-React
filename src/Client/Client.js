import React from 'react';

import './Client.css'

const client = (props) => {
    return (
        <div className="Client  ">
            <p id="client-id"> 1 </p>
            <p id="client-name"> {props.firstName} </p>
            <p id="client-last-name"> {props.lastName} </p>
            <p id="client-email" onClick={props.click}> {props.email} </p>
            {/*<p className="text-right">*/}
            {/*<button type="button" className="close text-right" aria-label="Close" id="delete-client">*/}
            {/*<span aria-hidden="true">&times;</span>*/}
            {/*</button>*/}
            {/*</p>*/}
            <input type="text" onChange={props.changed} value={props.email}/>
        </div>
    )
};

export default client;