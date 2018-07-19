import React, {PureComponent} from 'react'

import Client from './Client/Client'

class Clients extends PureComponent {
    constructor(props){
        super(props);
        console.log('[Client.js] inside Constructor', props);
        this.lastClientRef = React.createRef();

    }

    componentWillMount(){
        console.log('[willMount]')
    }

    componentDidMount(){
        console.log('[didMount]');
        this.lastClientRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillRecieveProps', nextProps);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps ,nextState);
    //     return nextProps.clients !== this.props.clients;
    // }
    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps ,nextState);

    }
    componentDidUpdate(){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }


    render(){
        console.log('[Clients.js] render inside Clients');
        return this.props.clients.map((client, index) => {
            return <Client
                firstName={client.firstName}
                position = {index}
                lastName={client.lastName}
                email={client.email}
                ref={this.lastClientRef}
                key={client.id}
                changeName={(event) => this.props.changedName(event, client.id)}
                deleteClient={() => this.props.deletedClient(index)}/>
        });
    }
}

export default Clients;