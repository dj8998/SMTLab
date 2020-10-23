import React from 'react';
import './About.css';
import {Container, Jumbotron} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const About = () => {
  return (
  		<div class="row">
		  <div class="col-6 col-md-2 leftsection">
		  <h2>LINKS</h2>
		  <ul className = 'leftlist'>
		  	<li><a href="https://www.udel.edu/" target="_blank">UDEL Home</a></li>
		  	<li><NavLink to="/GetInvolved" target="_blank">Get Involved</NavLink></li>
		  	<li><NavLink to="/Contact" target="_blank">Contact</NavLink></li>
		  </ul>	
		  </div> 
		  <div class="col-12 col-md-10 aboutimg">
		   
		  <div class="Container">
	      <ul>

	      <li>
	          <Jumbotron fluid className = "fluid">
	            <Container id="2019">
	              <h3 className = "mt3 fw10 ">Lets welcome Andrii Tiurkin as he starts his rotation in the SMT Lab</h3>
	              
	              <p className = "date1">
	              January 1, 2020
	              </p>

	              <hr/>
	            </Container>
	          </Jumbotron>
	      </li>

	      <li>
	          <Jumbotron fluid className = "fluid">
	            <Container id="2019">
	              <h3 className = "mt3 fw10 ">Congratulations to Zain Aslam for winning the Gore Fellowship 2020</h3>
	              
	              <p className = "date1">
	              December 15, 2019
	              </p>

	              <hr/>
	            </Container>
	          </Jumbotron>
	        </li>

	        <li>
	          <Jumbotron fluid className = "fluid">
	            <Container id="2019">
	              <h3 className = "mt3 fw10 ">Lets welcome Zain Aslam and Adam Roth as they start their rotations in the SMT lab</h3>
	              
	              <p className = "date1">
	              October 1, 2019
	              </p>

	              <hr/>
	            </Container>
	          </Jumbotron>
	        </li>

	        <li>
	          <Jumbotron fluid className = "fluid">
	            <Container id="2019">
	              <h3 className = "mt3 fw10 ">The SMT lab is starting at the University of Delaware</h3>
	              
	              <p className = "date1">
	              September 1, 2019
	              </p>

	              <hr/>
	            </Container>
	          </Jumbotron>
	        </li>

	      </ul>
	      </div>

		  </div>
		</div>
  );
}

export default About;
