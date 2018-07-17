import React, {Component} from 'react';
import './App.css';
import Client from './Client/Client';
import NavBar from './NavBar/NavBar';

class App extends Component {
    state = {
        clients: [
            {id: '1', firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'},
            {id: '2', firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'},
            {id: '3', firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'}
        ],
        showClients: false
    };

    nameChangedHandler = (event, id) => {
        const clientIndex = this.state.clients.findIndex(c => {
            return c.id === id;
        });

        const client = {
            ...this.state.clients[clientIndex]
        };

        client.name = event.target.value;

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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let clients = null;

        if (this.state.showClients) {
            clients = (
                <div>
                    {this.state.clients.map((client, index) => {
                        return <Client
                            firstName={client.firstName}
                            lastName={client.lastName}
                            email={client.email}
                            key={client.id}
                            deleteClient={() => this.deleteClientHandler(index)}/>
                    })}
                </div>
            );

            style.backgroundColor = 'red';

        }

        const classes = [];
        if (this.state.clients.length <= 2) {
            classes.push('red');
        }
        if (this.state.clients.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <NavBar renderClients={this.toggleClientsHandler}/>
                <p className={classes.join(' ')}>Oo</p>
                <button
                    style={style}
                    onClick={this.toggleClientsHandler}>Toggle Clients
                </button>
                {clients}
            </div>

        );
    }
}

export default App;
