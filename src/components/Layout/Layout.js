import React from 'react'
import Aux from '../../hoc/Aux'
import NavBar from '../NavBar/NavBar'

const Layout = (props) => {

    return (
        <Aux>
        <NavBar renderClients={props.toggleClients}  dark={true}/>
        {props.children}
        </Aux>
);

};
export default Layout;