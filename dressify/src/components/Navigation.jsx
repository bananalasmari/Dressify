import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import {useHistory  } from 'react-router-dom'
export default function Navigation() {
    const history = useHistory()
    return (
        <div>
             <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick = {()=> history.push('/login')}>Login</Nav.Link>
      <Nav.Link onClick = {()=> history.push('/signIn')}>Sign In</Nav.Link>

    </Nav>
   
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}
