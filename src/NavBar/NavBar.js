import React from 'react';
import './NavBar.css';


const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark  nav-custom ">
            <a className="navbar-brand ">
                <img src={'logo.png'} className={'img-fluid'} style={{width: '250px'}} alt="Logo"/>
            </a>

            <div className={'nav-button'}>
                <button className="navbar-toggler flex-1" type="button" data-toggle="collapse"
                        data-target="#navbar-supported-content">
                    <span className="navbar-toggler-icon"/>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbar-supported-content">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item text-right nav-item-hover">
                        <a className="nav-link nav-item-custom" style={{color:'#fff'}}  id="journal">Journal</a>
                    </li>
                    <li className="nav-item text-right nav-item-hover">
                        <a className="nav-link nav-item-custom" style={{color:'#fff'}} onClick={props.renderClients} id="clients">Clients</a>
                    </li>
                    <li className="nav-item text-right nav-item-hover">
                        <a className="nav-link nav-item-custom" style={{color:'#fff'}} id="services">Services</a>
                    </li>
                    <li className="nav-item text-right nav-item-hover">
                        <a className="nav-link nav-item-custom" style={{color:'#fff'}} id="categories">Categories</a>
                    </li>
                    <li className="nav-item text-right nav-item-hover">
                        <a className="nav-link nav-item-custom" style={{color:'#fff'}} id="categories">Discounts</a>
                    </li>

                </ul>
            </div>
        </nav>

    )
}

export default NavBar;
