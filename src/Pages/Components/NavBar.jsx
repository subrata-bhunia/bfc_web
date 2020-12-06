import React from 'react';
import { NavLink } from 'react-router-dom';
import BfcLogo from '../../Bfc/icon1.png';

const NavBar=()=>{
    return(
        <div>
            <div className=" nav_bg">
                <div className="row">
                    <div className="col-11 mx-auto " >
                    <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
                        <NavLink className="navbar-brand" exact to="/"><img src={BfcLogo} width="30" height="30" alt="" loading="lazy" className="bfc-logo align-top" /></NavLink>
                        <NavLink className="navbar-brand" exact to="/">Debpur Bright Future Club</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-link" activeClassName="ActiveMenu" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="ActiveMenu" exact to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="ActiveMenu" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="ActiveMenu" exact to="/contact">Contact</NavLink>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
         </div>
    </div>
    )
}


export default NavBar;