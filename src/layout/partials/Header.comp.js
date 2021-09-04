import React from 'react';

import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';

import logo from '../../assets/image/Logo.png'

export const Header= () => {
    return (
        <Navbar collapseOnSelect bg ="info" variant="dark" expand="lg">
            <Navbar.Brand>
            <img src= {logo} alt="logo" width="50px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-auto">
                    <Nav.Link eventKey="2" href="/dashboard"> Dashboard</Nav.Link>
                    <Nav.Link eventKey="2" href="/dashboard"> Tickets</Nav.Link>
                    <Nav.Link eventKey="2" href="/dashboard"> Logout</Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );
};
