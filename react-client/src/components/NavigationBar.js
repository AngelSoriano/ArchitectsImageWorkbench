/**
 * Created by naelin on 2/13/17.
 */

import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import '../styles/App.css';
import UploadComponent from './UploadComponent'

class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBar">
                <UploadComponent/>

                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to="/">
                                <a>Architects Image Workbench</a>
                            </LinkContainer>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to="/about">
                            <NavItem eventKey={1}>About</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/panafold">
                            <NavItem eventKey={2}>Panafold</NavItem>
                        </LinkContainer>

                    </Nav>

                </Navbar>

            </div>
        )
    }
}
export default NavigationBar

