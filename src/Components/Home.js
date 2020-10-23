import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button, Row, Col, Image} from 'react-bootstrap';
import { NavLink} from "react-router-dom";

import './Home.css';
import 'tachyons';


const Home = () => {
  return (
  		<div className = 'mainn'>
  			<div className = 'container-fluid wrapp'>
  				<Container>
				  <Row className="justify-content-md-center">
				    <Col className = 'project-image' md="auto">
				    	<Image src= "assets/image.png" height = 'auto' width = '100%'/>
				    </Col>
				    <Col className = 'project-image '>
				    <h2 className = 'description'>OUR GOAL</h2>
				    <p className = 'parainfo'>Our goal is to design microrobots for precision delivery of biochemical and cellular patterning for applications in personalized therapeutics, drug delivery and tissue engineering. </p>
				    </Col>
				  </Row>
				</Container>
  			</div>
	  		<div class='wrapper'>
			  <div class='letter fadde'>
			  	<Image src= "assets/biomech.jpg"  width = '100%'/>
			  	  <div class="overlay">
				    <div class="text"><NavLink exact className="linkprop white" to= '/topic1'>Microrobots for Biomedical Applications</NavLink></div>
				  </div>
			  </div>
			  <div class='letter fadde'>
			    <Image src= "assets/nano.jpg" width = '100%'/>
			    <div class="overlay">
				    <div class="text"><NavLink className="linkprop white" to= '/topic2'>Active Matter and Self-Propelled Micromachine</NavLink></div>
				  </div>
			  </div>
			  <div class='letter fadde'>
			    <Image src= "assets/robotics.jpg" width = '100%'/>
			    <div class="overlay">
				    <div class="text"><NavLink className="linkprop white" to= '/topic3'>Organoid and Tissues: Cellular Differentiation with Microrobots</NavLink></div>
				  </div>
			  </div>
			  <div class='letter fadde'>
			    <Image src= "assets/clean.jpg" width = '100%'/>
			    <div class="overlay">
				    <div class="text"><NavLink className="linkprop white" to= '/topic4'>Control of Microrobotic Swarms</NavLink></div>
				  </div>
			  </div>
			</div>
  		</div>
  		
  );
}

export default Home;