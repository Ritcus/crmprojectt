import React from 'react';

import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';

import logo from '../../assets/image/Logo.png'

import { useHistory } from 'react-router-dom';



import {LinkContainer} from "react-router-bootstrap"

export const Header= () => {
    const history= useHistory()

    const logMeOut =() => {
        history.push("/")
    }
    return (
        <Navbar collapseOnSelect bg ="info" variant="dark" expand="lg">
            <Navbar.Brand>
            <img src= {logo} alt="logo" width="150px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-auto">
                    <LinkContainer to="/dashboard" ><Nav.Link> Dashboard</Nav.Link></LinkContainer>
                    <LinkContainer to ="/tickets"><Nav.Link> Tickets</Nav.Link></LinkContainer>
                    <Nav.Link onClick={logMeOut} > Logout</Nav.Link>
                    
                    
                    
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};
