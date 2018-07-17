import React, {Component} from 'react'

import Client from './Client/Client'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class Clients extends Component {
    constructor(props){
        super(props);
        console.log('[Client.js] inside Constructor', props);

    }

    componentWillMount(){
        console.log('[willMount]')
    }

    componentDidMount(){
        console.log('[didMount]')
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillRecieveProps', nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps ,nextState);
        return nextProps.clients !== this.props.clients;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps ,nextState);

    }
    componentDidUpdate(){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }


    render(){
        console.log('[Clients.js] render inside Clients')
        return this.props.clients.map((client, index) => {
            return <ErrorBoundary key={client.id}><Client
                firstName={client.firstName}
                lastName={client.lastName}
                email={client.email}
                changeName={(event) => this.props.changedName(event, client.id)}
                deleteClient={() => this.props.deletedClient(index)}/></ErrorBoundary>
        });
    }
}

export default Clients;