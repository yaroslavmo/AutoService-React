import React from 'react';

const client = (props) => {
    return (
        <div className="client row">
            <p id="client-id"> 1 </p>
            <p id="client-name"> {props.firstName} </p>
            <p id="client-last-name"> {props.lastName} </p>
            <p id="client-email" onClick={props.click}> {props.email} </p>
            {/*<p className="text-right">*/}
                {/*<button type="button" className="close text-right" aria-label="Close" id="delete-client">*/}
                    {/*<span aria-hidden="true">&times;</span>*/}
                {/*</button>*/}
            {/*</p>*/}
        </div>
    )
};

export default client;
