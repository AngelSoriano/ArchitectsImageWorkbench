/**
 * Created by naelin on 2/13/17.
 */

import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import UserIcon from './UserIcon';
import './App.css';

class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBar">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Architects Image Workbench</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown className = "userMenu" eventKey={3} title = {<UserIcon/>} id="basic-nav-dropdown" pullRight>
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar

