/**
 * Created by naelin on 2/13/17.
 */

import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { DefaultRoute } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import UserIcon from './UserIcon';
import '../styles/App.css';

class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBar">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to="/">
                            <a>Architects Image Workbench</a>
                            </LinkContainer>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to="/Link1">
                            <NavItem eventKey={1}>Link</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/Link2">
                            <NavItem eventKey={2}>Link</NavItem>
                        </LinkContainer>
                        <NavDropdown className="userMenu" eventKey={3} title={<UserIcon/>} id="basic-nav-dropdown" pullRight>
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

