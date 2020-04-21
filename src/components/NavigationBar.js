import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Brian Kang</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Link style={linkStyle} to="/projects">link pro</Link>
        <Link style={linkStyle} to="/resume">link resu</Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
