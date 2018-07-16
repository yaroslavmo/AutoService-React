import React, {Component} from 'react';
import NavBar from './NavBar/NavBar.js';
import Client from './Client/Client';
import './App.css';

class App extends Component {
    state = {
        clients: [
            {id:'1', firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'},
            {id:'2', firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'},
            {id:'3', firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'}
        ],
        showClients: false
    };

    nameChangedHandler = (event) => {
        this.setState({
            clients: [
                {firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'},
                {firstName: 'Yarik', lastName: 'Mokhurenko', email: event.target.value},
                {firstName: 'Yarik', lastName: 'Mokhurenko', email: 'yarik335@rambler.ru'}
            ]
        })
    };

    toggleClients = () => {
        const doesShow = this.state.showClients;
        this.setState({showClients: !doesShow});
    };
deleteClientHandler = (clientIndex) => {

    // const  clients = this.state.clients.slice();
    const  clients = [...this.state.clients];
    clients.splice({clients:clients});
    this.setState({clients: clients})
}

    render() {
        const style = {
            backgroundcolor: 'white',
            font: 'inherit',
            boreder: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        let clients = null;
        if (this.state.showClients) {
            clients = (
                <div className="table-row header">
                    {this.state.clients.map((client,index) => {
                        return <Client click={this.deleteClientHandler(index)}
                            firstName={client.firstName}
                                       lastName={client.lastName}
                                       email={client.email}
                                       key={client.id}
                        />
                    })}

                </div>
            );

        }
        return (
            <div className="App">
                <NavBar/>
                <div className="container ">
                    {clients}

                    <button type="button" style={style} className="close text-right"
                            onClick={this.toggleClients} aria-label="Close"
                            id="delete-client">
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>
            </div>
        );
    }
}

export default App;
