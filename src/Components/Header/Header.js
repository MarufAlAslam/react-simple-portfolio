import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" className='navbar-dark' expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold">PORTFOLIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="contact">Contact</NavLink>
                            <NavLink className="nav-link" to="education">Education</NavLink>
                            <NavLink className="nav-link" to="skills">Skills</NavLink>
                            <NavLink className="nav-link" to="seminars">Seminars</NavLink>
                            <NavLink className="nav-link" to="interests">Interests</NavLink>
                            <NavLink className="nav-link" to="awards">Awards</NavLink>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;