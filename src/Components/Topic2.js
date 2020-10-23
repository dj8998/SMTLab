import React, {Component} from 'react';
import './Topic2.css';
import {Image, Row, Col} from 'react-bootstrap';
import ReactPlayer from 'react-player';

const Topic2 = () => {

  return (
    		<div>
    			<header class="bg-dark text-center py-5 mb-0 bt bw2">
				  <div class="container ">
				    <h1 class="font-weight-light text-white ">Active Matter and Self-Propelled Micromachines</h1>
				</div>
				</header>
				<div className= 'topic2'>
				<box className="boxxx">
					<h3 className= "tc pa5 ba bw2 shadow-4">Self-Propelled micromachines are micro- and nanoscale motors that move autonomously by converting a specific stimulus (e.g chemical gradients, lights etc.) to kinetic energy. In our lab we are interested in exploring different kinds of self-propelled micromotors, along with their interactions with the environment.</h3>
					<div className='player-wrapper'>
				        <ReactPlayer
				          controls= 'false'
				          playing = 'true'
				          loop= 'true'
				          className='react-player '
				          url='https://youtu.be/WpXdheinXeY'
				          width='80%'
				          height= '500px'
				        />
				      </div>
				    <Row className= " lowerimg">
				    	<Col sm>
				    	<Image src= "assets/Picture1.png" height = 'auto' width = '75%' className="image1"/>
				    	</Col>
				    	<Col sm>
				    	<Image src= "assets/Picture3.png" height = 'auto' width = '75%' className="image2"/>
				    	</Col>
				    </Row>
				</box>
				</div>
    		</div>

      )
   
}


export default Topic2;