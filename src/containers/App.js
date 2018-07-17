import React, {Component} from 'react';
import classes from './App.css';
import Clients from '../components/Clients/Clients'
import NavBar from '../components/NavBar/NavBar';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] inside Constructor', props);
        this.state = {
            clients: [
                {id: '1', firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'},
                {id: '2', firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'},
                {id: '3', firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'}
            ],
            showClients: false
        };
    }

    componentWillMount() {
        console.log('[willMount]')
    }

    componentDidMount() {
        console.log('[didMount]')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);

    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidUpdate');
    }


    nameChangedHandler = (event, id) => {
        const clientIndex = this.state.clients.findIndex(c => {
            return c.id === id;
        });

        const client = {
            ...this.state.clients[clientIndex]
        };

        client.email = event.target.value;

        const clients = [...this.state.clients];
        clients[clientIndex] = client;

        this.setState({clients: clients});
    };

    deleteClientHandler = (clientIndex) => {
        // const clients = this.state.clients.slice();
        const clients = [...this.state.clients];
        clients.splice(clientIndex, 1);
        this.setState({clients: clients});
    };

    toggleClientsHandler = () => {
        const doesShow = this.state.showClients;
        this.setState({showClients: !doesShow});
    };

    render() {
        console.log('[App.js] inside render');
        let clients = null;

        if (this.state.showClients) {
            clients = <Clients clients={this.state.clients}
                               changedName={this.nameChangedHandler}
                               deletedClient={this.deleteClientHandler}/>
        }

        return (
            <div className={classes.App}>
                <NavBar renderClients={this.toggleClientsHandler}/>
                <Cockpit showClients={this.state.showClients}
                         clients={this.state.clients}
                         clicked={this.toggleClientsHandler}
                />
                {clients}
            </div>

        );
    }
}

export default App;
