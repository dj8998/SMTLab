import React, {Component} from 'react';
import './Topic2.css';
import {Image} from 'react-bootstrap';
import ReactPlayer from 'react-player';

const Topic3 = () => {

  return (
    		<div>
    			<header class="bg-dark text-center py-5 mb-0 bt bw2">
				  <div class="container ">
				    <h1 class="font-weight-light text-white">Organoid and Tissues: Cellular Differentiation with Microrobots</h1>
				</div>
				</header>
				<div className= 'topic2'>
				<box className="boxxx">
					<h3 className= "tc pa5 ba bw2 shadow-4">Our lab focuses on developing different methods for controlling cellular fate in a controlled manner</h3>
				    <Image src= "assets/topic3.png" height = 'auto' width = '100%'/>
				</box>
				</div>
    		</div>

      )
   
}


export default Topic3;