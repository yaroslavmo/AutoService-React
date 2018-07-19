import React from 'react';
import './NavBar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import PropTypes from 'prop-types'


// const NavBar = (props) => {
//     return (
//         <nav className="navbar navbar-expand-lg bg-dark navbar-dark  nav-custom ">
//
//             <a className="navbar-brand ">
//                 <img src={'logo.png'} className={'img-fluid'} style={{width: '250px'}} alt="Logo"/>
//             </a>
//             <div className={'nav-button'}>
//                 <button className="navbar-toggler flex-1" type="button" data-toggle="collapse"
//                         data-target="#navbar-supported-content">
//                     <span className="navbar-toggler-icon"/>
//                 </button>
//             </div>
//
//             <div className="collapse navbar-collapse" id="navbar-supported-content">
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item text-right nav-item-hover">
//                         <a className="nav-link nav-item-custom" style={{color:'#fff'}}  id="journal">Journal</a>
//                     </li>
//                     <li className="nav-item text-right nav-item-hover">
//                         <a className="nav-link nav-item-custom"  style={{color:'#fff'}} onClick={props.renderClients} id="clients">Clients</a>
//                     </li>
//                     <li className="nav-item text-right nav-item-hover">
//                         <a className="nav-link nav-item-custom" style={{color:'#fff'}} id="services">Services</a>
//                     </li>
//                     <li className="nav-item text-right nav-item-hover">
//                         <a className="nav-link nav-item-custom" style={{color:'#fff'}} id="categories">Categories</a>
//                     </li>
//                     <li className="nav-item text-right nav-item-hover">
//                         <a className="nav-link nav-item-custom" style={{color:'#fff'}} id="categories">Discounts</a>
//                     </li>
//
//                 </ul>
//             </div>
//         </nav>
//
//     )
// }

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <img src={'logo.png'} className={'img-fluid'} style={{width: '250px', backgroundColor: 'transparent'}}alt="Logo"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Journal</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={this.props.renderClients}>Clients</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Categories</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Discounts</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
};
NavbarBrand.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
};

export default NavBar;
