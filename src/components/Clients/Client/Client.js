import React,{Component} from 'react';

import classes from './Client.css'


class Client extends Component {
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

    render(){
        console.log('[Client.js] render inside Client');
        return (
            <div className={classes.Client}>
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
                <input type="text" onChange={this.props.changeName} value={this.props.email}/>
            </div>
        )
    }
}

export default Client;