import React from 'react'
import './Header.css';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import header from './header.png';
import {
    Link
  } from "react-router-dom";
  const links = {
    textDecoration:'none',
    color:'darkgray'
  }
  const link = {
    textDecoration:'none',
    color:'black'
  }

function Header(){
    return(
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand><Link to='/home'>
            <Image src={header}
                   width="200"
                   alt="welcome"/>
                   </Link>
        </Navbar.Brand>
        <Navbar.Brand><Link to='/home'style={links}>Honeycomb Book</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <NavDropdown title="Book & People" id="collasible-nav-dropdown0" className='title'>
            <NavDropdown.Item ><Link to='/home/Map' style={link}>Book Map</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Search' style={link}>Search</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Books' style={link}>View Books</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Community" id="collasible-nav-dropdown1" className='title'>
            <NavDropdown.Item ><Link to='/home/Forums' style={link}>Forums</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Zone' style={link}>Start Zone</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Information" id="collasible-nav-dropdown2" className='title'>
            <NavDropdown.Item ><Link to= '/home/AboutUs' style={link}>About Us</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/HowTo' style={link}>How to Exchange Books</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Press' style={link}>Press & Media</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Quotes' style={link}>Quotes</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Team' style={link}>Team</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Contact' style={link}>Contact Us</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Privacy' style={link}>Privacy & Policy</Link></NavDropdown.Item>
        </NavDropdown>
        
    </Nav>
    <Nav className='title'>
      <Nav.Link><Link to='/home/Signup' style={links}>Signup</Link></Nav.Link>
      <span className='span'>|</span>
      <Nav.Link eventKey={2}>
        <Link to='/home/Login'style={links}>Log In</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
    </div>
    );
}
export default Header;