import React from 'react';
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

function HeaderOrg(memberOrg){
    return(
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand><Link to='/home/Org'>
            <Image src={header}
                   width="200"
                   alt="welcome"/>
                   </Link>
        </Navbar.Brand>
        <Navbar.Brand><Link to='/home/Org'style={links}>Honeycomb Book</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <NavDropdown title="Home" id="collasible-nav-dropdown0" className='title'>
            <NavDropdown.Item ><Link to='/home/Org/Profile' style={link}>My Profile</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Org/MyBooks' style={link}>My Books</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home//Org/Users' style={link}>My Members</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Org/AddUser' style={link}>Add User</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Org/Add' style={link}>Add Book</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Org/Manage' style={link}>Manage Profile</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Book & People" id="collasible-nav-dropdown0" className='title'>
            <NavDropdown.Item ><Link to='/home/Org/Map' style={link}>Book Map</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Org/Search' style={link}>Search</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Org/Books' style={link}>View Books</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Community" id="collasible-nav-dropdown1" className='title'>
            <NavDropdown.Item ><Link to='/home/Org/Forums' style={link}>Forums</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/Org/Zone' style={link}>Start Zone</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Information" id="collasible-nav-dropdown2" className='title'>
            <NavDropdown.Item ><Link to= '/home/Org/AboutUs' style={link}>About Us</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Org/HowTo' style={link}>How to Exchange Books</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Org/Press' style={link}>Press & Media</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Org/Quotes' style={link}>Quotes</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Org/Team' style={link}>Team</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Org/Contact' style={link}>Contact Us</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/Org/Privacy' style={link}>Privacy & Policy</Link></NavDropdown.Item>
        </NavDropdown>
        
    </Nav>
    <Nav className='title'>
      <Nav.Link><Link to='/home/Org/Profile' style={links}>
        {memberOrg.Username}
        </Link></Nav.Link>
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
export default HeaderOrg;