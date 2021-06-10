import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom'
import '../assets/css/navbar.css';
// import NavbarScroll from '../assets/js/NavbarScroll'



export default function Navigation(props) {
   const history = useHistory()

   const [navbar, setNavbar] = useState(false);

   const ChangeBackground = () => {
      console.log(window.scrollY);
   };

   window.addEventListener('scroll', ChangeBackground);

   return (
      <div>
         {/* <NavbarScroll/> */}
         <Navbar className="navbar navbar-expand-lg" collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <div className="container ">
               <Navbar.Collapse className="navbar-collapse w-100 order-1 order-lg-0 collapse" id="navbarNav">
                  <Nav className="navbar-nav">
                     <Nav.Item>
                        <Nav.Link>Women</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link>Men</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link>Kids</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Navbar.Collapse>
               <div class="d-flex w-100 order-0">
                  <div class="w-100">
                     <a class="navbar-brand text-center w-100" href="/"><Navbar.Brand className="navbar-brand text-center w-100" classhref="/home"><img className="logo" style={{ width: 171, height: 90 }} src={logo} alt="Logo" /></Navbar.Brand>
                        <span class="w-100"></span></a>
                  </div>
               </div>
               <span class="w-100"></span>
               <Button variant="dark" onClick={() => history.push('/signIn')}>SignUp</Button>
               {' '}
               { !props.isLogin ?
               <Button variant="outline-light" onClick={() => history.push('/login')}>Login</Button>
           :
           <Button variant="outline-light" onClick={() => history.push('/Profile')}>Profile</Button>
           } 

            </div>


         </Navbar>


         {/* <Navbar className="navbar navbar-expand-lg " collapseOnSelect expand="lg">
            <span class="w-100"></span>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="navbar-collapse w-100 order-1 order-lg-0 collapse" id="navbarNav">
               <Nav className="navbar-nav" style={{ flex: 1 }}>
                  <Nav.Item>
                     <Nav.Link href="/home">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link href="/home">Collection</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link href="/home">Contact</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link href="/home">Blog</Nav.Link>
                  </Nav.Item>
               </Nav>
               
               <Navbar.Brand className="navbar-brand text-center w-100" classhref="#home"><img style={{ width: 180, height: 88 }} src={logo} alt="Logo" /></Navbar.Brand>
               <span class="w-100"></span>
            </Navbar.Collapse>
         </Navbar> */}

      </div>
   )
}

