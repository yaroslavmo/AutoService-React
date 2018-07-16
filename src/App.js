import React, {Component} from 'react';
import NavBar from './NavBar/NavBar.js';
import Client from './Client/Client.js';
import './App.css';

class App extends Component {
    state = {
        clients:[
            {firstName:'Yarik', lastName:'Mokhurenko', email:'yarik335@rambler.ru'},
            {firstName:'Yarik', lastName:'Mokhurenko', email:'yarik335@rambler.ru'},
            {firstName:'Yarik', lastName:'Mokhurenko', email:'yarik335@rambler.ru'}
        ]
    };
delete = () => {
    this.setState({
        clients:[
            {firstName:'Yarik', lastName:'Mokhurenko', email:'yarik335@rambler.ru'},
            {firstName:'Yarik', lastName:'Mokhurenko', email:'yaroslavmokhurenko@gmail.com'},
            {firstName:'Yarik', lastName:'Mokhurenko', email:'yarik335@rambler.ru'}
        ]
    })
};

    render() {
        return (
            <div className="App">
                <NavBar/>
                <div className="container ">
                    <div className="table-row header">
                        <Client firstName={this.state.clients[0].firstName}
                                lastName={this.state.clients[0].lastName}
                                click={this.delete}
                                email={this.state.clients[0].email}/>
                        <Client firstName={this.state.clients[1].firstName} lastName={this.state.clients[1].lastName} email={this.state.clients[1].email}>hobbies: racing</Client>
                        <Client firstName={this.state.clients[2].firstName} lastName={this.state.clients[2].lastName} email={this.state.clients[2].email}/>
                        <button type="button" className="close text-right" onClick={this.delete} aria-label="Close" id="delete-client">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
