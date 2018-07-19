import React, {Component} from 'react';
import PropTypes from 'prop-types'

import classes from './Client.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import {AuthContext} from '../../../App'


class Client extends Component {
    constructor(props) {
        super(props);
        console.log('[Client.js] inside Constructor', props);
        this.inputElement = React.createRef();

    }

    componentWillMount() {
        console.log('[willMount]')
    }

    componentDidMount() {
        console.log('[didMount]')
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus(){
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Client.js] render inside Client');
        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth ? <p>I'm authenticated!</p>: null}
                </AuthContext.Consumer>
                <p id="client-id"> {this.props.id} </p>
                <p id="client-first-name"> {this.props.firstName} </p>
                <p id="client-last-name"> {this.props.lastName} </p>
                <p id="client-email"> {this.props.email} </p>
                <p className="text-right">
                    <button type="button" className="close text-right" aria-label="Close" id="delete-client"
                            onClick={this.props.deleteClient}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changeName}
                    value={this.props.email}/>
            </Aux>
        )
    }
}

Client.propTypes = {
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    deleteClient: PropTypes.func,
    changeName: PropTypes.func,
};

export default withClass(Client, classes.Client);