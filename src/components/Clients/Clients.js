import React from 'react'

import Client from './Client/Client'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const clients = (props) => props.clients.map((client, index) => {
        return <ErrorBoundary key={client.id}><Client
            firstName={client.firstName}
            lastName={client.lastName}
            email={client.email}
            changeName={(event) => props.changedName(event, client.id)}
            deleteClient={() => props.deletedClient(index)}/></ErrorBoundary>
    });

export default clients;