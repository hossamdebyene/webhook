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

function HeaderOrguser(){
    return(
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand><Link to='/home/Orguser'>
            <Image src={header}
                   width="200"
                   alt="welcome"/>
                   </Link>
        </Navbar.Brand>
        <Navbar.Brand><Link to='/home/Orguser'style={links}>Honeycomb Book</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <NavDropdown title="Home" id="collasible-nav-dropdown0" className='title'>
            <NavDropdown.Item ><Link to='/home/Orguser/Profile' style={link}>My Profile</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Orguser/MyBooks' style={link}>My Books</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Orguser/Manage' style={link}>Manage Profile</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Book & People" id="collasible-nav-dropdown0" className='title'>
            <NavDropdown.Item ><Link to='/home/Orguser/Map' style={link}>Book Map</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Orguser/Search' style={link}>Search</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Orguser/Books' style={link}>View Books</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Community" id="collasible-nav-dropdown1" className='title'>
            <NavDropdown.Item ><Link to='/home/Orguser/Forums' style={link}>Forums</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Orguser/Zone' style={link}>Start Zone</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Information" id="collasible-nav-dropdown2" className='title'>
            <NavDropdown.Item ><Link to= '/home/Orguser/AboutUs' style={link}>About Us</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Orguser/HowTo' style={link}>How to Exchange Books</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Orguser/Press' style={link}>Press & Media</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Orguser/Quotes' style={link}>Quotes</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Orguser/Team' style={link}>Team</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Orguser/Contact' style={link}>Contact Us</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Orguser/Privacy' style={link}>Privacy & Policy</Link></NavDropdown.Item>
        </NavDropdown>
        
    </Nav>
    <Nav className='title'>
      <Nav.Link><Link to='/home/Orguser/Profile' style={links}>Name</Link></Nav.Link>
      <span className='span'>|</span>
      <Nav.Link eventKey={2}>
        <Link to='/home/Login'style={links}>Log Out</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
    </div>
    );
}
export default HeaderOrguser;