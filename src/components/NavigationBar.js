import React from 'react'
import {Navbar, Nav, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import github from '../data/pictures/Github/GitHub-Mark-Light-32px.png';
import pdf from '../doc/resume final.pdf';


export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="pl-lg-5">
      <Link className="navbar-brand" to="/">Brian Kang</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/projects">Projects</Link>
          <a href={pdf} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
        </Nav>
        
      <Nav>
        
        <a href="https://github.com/1kangyun1" target="_blank" rel="noopener noreferrer" className="nav-link"><Image src={github} fluid /></a>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
