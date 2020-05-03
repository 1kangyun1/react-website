import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="pl-lg-5">
      <Link className="navbar-brand" to="/">Brian Kang</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/resume">Resume</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
