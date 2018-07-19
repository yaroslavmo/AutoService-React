import React, {Component} from 'react';
import classes from './App.css';
import Clients from '../components/Clients/Clients'
import Layout from '../components/Layout/Layout';
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false)

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
            showClients: false,
            toggleClicked: 0,
            authenticated: false
        };
    }


    componentDidMount() {
        console.log('[didMount]')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        console.log('[getDerivedStateFromProps App.js] Inside getDerivedStateFromProps', nextProps, prevProps);
        return prevProps
    }

    static getSnapShotBeforeUpdate() {
        console.log('[getDerivedStateFromProps App.js] Inside getSnapShotBeforeUpdate');
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
        const clients = [...this.state.clients];
        clients.splice(clientIndex, 1);
        this.setState({clients: clients});
    };

    toggleClientsHandler = () => {
        const doesShow = this.state.showClients;
        this.setState((prevState, props) => {
                return {
                    showClients: !doesShow,
                    toggleClicked: prevState.toggleClicked + 1
                }
            }
        );
    };

    loginHandler = () => {
        this.setState({authenticated: true});
    };


    render() {
        console.log('[App.js] inside render');
        let clients = null;

        if (this.state.showClients) {
            clients = <Clients clients={this.state.clients}
                               changedName={this.nameChangedHandler}
                               deletedClient={this.deleteClientHandler}
            />
        }

        return (
            <Aux>
                <Layout toggleClients={this.toggleClientsHandler}>
                    <Cockpit showClients={this.state.showClients}
                             clients={this.state.clients}
                             clicked={this.toggleClientsHandler}
                             login={this.loginHandler}/>
                    {clients}
                </Layout>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
