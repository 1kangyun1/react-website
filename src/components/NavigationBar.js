import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";


export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link class="navbar-brand" to="/">Brian Kang</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link class="nav-link" to="/projects">Projects</Link>
          <Link class="nav-link" to="/resume">Resume</Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
