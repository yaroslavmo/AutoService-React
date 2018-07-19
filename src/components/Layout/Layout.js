import React from 'react'
import Aux from '../../hoc/Aux'
import NavBar from '../NavBar/NavBar'

const Layout = (props) => {

    return (
        <Aux>
        <NavBar />
        {props.children}
        </Aux>
);

};
export default Layout;