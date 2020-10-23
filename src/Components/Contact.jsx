import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Contact.css';
import {Button, Container , Row, Col} from 'react-bootstrap';
 
 
class Contact extends Component {
 
  render() {
    return (

    		<Container>
			  <Row>
			    <Col>
			    	<h3>Mailing Address</h3>
				 	<p>330 Spencer Lab </p>
					<p>Newark, Delaware 19716</p>
					<p>United States</p>
			    </Col>
			    <Col>
			    	<h3>Contact Information</h3>
				 	<p>Phone: 302-831-0149</p>
					<p>samdas@udel.edu</p>
			    </Col>
			    <Col>
			    	  <h3>Contact Form </h3>
				      <p>If you have specific questions regarding our research or about the publications, put your information in the form here so we can address your questions and comments. Thank you for your questions and input!</p>
				      <Button variant="dark" className="btn btn-primary btn-lg">Click here to fill the form</Button>
				   
			    </Col>
			  </Row>
			</Container>
			  
    );
  }
}
 
export default Contact;