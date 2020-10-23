import React from 'react';
import Announcement from './Announcement';
import {Container, Row, Col, Jumbotron} from 'react-bootstrap';
import './Signin.css'

function Signin() {
  return (
    	
		  <Row>
		    <Col>

		      <Jumbotron className = "Jumbo">
			  <h4>Another Section</h4>
			  
			</Jumbotron>


		    </Col>
		    <Col xs={6}>

		    <Jumbotron className = "Jumbo midpor">
			  <h4>UPLOAD A FILE</h4>
			  <Announcement />
			</Jumbotron>

		    </Col>


		    <Col>
			<Jumbotron className = "Jumbo">
			  <h4>LATEST ANNOUNCEMENTS</h4>
			  <p>
			    There are no upcoming events
			  </p>
			  <a href= "/#"> Click to add a new event </a>
			</Jumbotron>
			<Jumbotron className = "Jumbo">
			  <h4>UPCOMING EVENTS</h4>
			  <a href= "/#"> Click to add a Announcement </a>
			  <p>
			    (No announcements have been posted yet.)
			  </p>
			</Jumbotron>
		    </Col>
		  </Row>
		
       );
}

export default Signin;
