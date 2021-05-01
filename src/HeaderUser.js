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

function HeaderUser(){
    return(
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand><Link to='/home/user'>
            <Image src={header}
                   width="200"
                   alt="welcome"/>
                   </Link>
        </Navbar.Brand>
        <Navbar.Brand><Link to='/home/user'style={links}>Honeycomb Book</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <NavDropdown title="Home" id="collasible-nav-dropdown0" className='title'>
            <NavDropdown.Item ><Link to='/home/user/Profile' style={link}>My Profile</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/user/MyBooks' style={link}>My Books</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home//user/Friends' style={link}>My Friends</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/user/Add' style={link}>Add Book</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/user/Manage' style={link}>Manage Profile</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Book & People" id="collasible-nav-dropdown0" className='title'>
            <NavDropdown.Item ><Link to='/home/user/Map' style={link}>Book Map</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/user/Search' style={link}>Search</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/user/Books' style={link}>View Books</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Community" id="collasible-nav-dropdown1" className='title'>
            <NavDropdown.Item ><Link to='/home/user/Forums' style={link}>Forums</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/home/user/Zone' style={link}>Start Zone</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Information" id="collasible-nav-dropdown2" className='title'>
            <NavDropdown.Item ><Link to= '/home/user/AboutUs' style={link}>About Us</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/user/HowTo' style={link}>How to Exchange Books</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/user/Press' style={link}>Press & Media</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/user/Quotes' style={link}>Quotes</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/user/Team' style={link}>Team</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/user/Contact' style={link}>Contact Us</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to= '/home/user/Privacy' style={link}>Privacy & Policy</Link></NavDropdown.Item>
        </NavDropdown>
        
    </Nav>
    <Nav className='title'>
      <Nav.Link><Link to='/home/user/Profile' style={links}>Name</Link></Nav.Link>
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
export default HeaderUser;