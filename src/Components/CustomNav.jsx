import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNav.css';

const CustomNav = () => {
  return (
  		<div className = 'Container'>
  		<Navbar bg="dark" expand="lg" >
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse className="basic-navbar-nav">
			    <Nav className="mr-auto cusnav" id = "myDIV">
			      <Nav.Link href="/"><a id = 'changes' >
			      
			      <NavLink
				      exact
				      activeClassName="activ"
				      className="navbar__link"
				      to="/"
				    >
			      HOME
			      </NavLink></a></Nav.Link>

			      <Nav.Link href="/Publication"><a id = 'changes'>
			      <NavLink
				      exact
				      activeClassName="activ"
				      className="navbar__link"
				      to="/Publication" >
			      PUBLICATIONS
			      </NavLink></a></Nav.Link>


			      <Nav.Link href="/Research"><a id = 'changes'>
			      <NavLink
				      exact
				      activeClassName="activ"
				      className="navbar__link"
				      to="/Research" >
			      RESEARCH
			      </NavLink></a></Nav.Link>


			      <Nav.Link href="Contact"><a id = 'changes'>
			      <NavLink
				      exact
				      activeClassName="activ"
				      className="navbar__link"
				      to="/Contact" >
			      Contact Us
			      </NavLink></a></Nav.Link>

			      <Nav.Link href="About"><a id = 'changes'>
			      <NavLink
				      exact
				      activeClassName="activ"
				      className="navbar__link"
				      to="/About" >
			      NEWS
			      </NavLink></a></Nav.Link>

			      <Nav.Link href="Team"><a id = 'changes'>
			      <NavLink
				      exact
				      activeClassName="activ"
				      className="navbar__link"
				      to="/Team" >
			      OUR TEAM
			      </NavLink></a></Nav.Link>
			    </Nav>
			  </Navbar.Collapse>
		</Navbar>
		</div>
  );
}

export default CustomNav;
