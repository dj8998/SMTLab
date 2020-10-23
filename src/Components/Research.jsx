import React from 'react';
import './Research.css';
import { NavLink} from "react-router-dom";
import {Image} from 'react-bootstrap';
import Topic1 from './Topic1';
import Topic2 from './Topic2';
import Topic3 from './Topic3';
import Topic4 from './Topic4';


const Research = () => {
  return (
  		<div class="row">
		  <div class="col-6 col-md-2 leftsection">
			  <h2>Research</h2>
			  <ul className = 'leftlist fixed-content'>
			  	<li>
			  	<NavLink exact to= '/topic1'>
				    <div >Microrobots for Biomedical Applications</div>
			  	</NavLink>
			  </li>
			  	<li>
			  	<NavLink exact to= '/topic2'>
				    <div >Active Matter and Self-Propelled Micromachine</div>
			  	</NavLink>
			  	</li>
			  	<li>
			  	<NavLink exact to= '/topic3'>
				    <div >Organoid and Tissues: Cellular Differentiation with Microrobots</div>
			  	</NavLink>
			  	</li>
			  	<li>
			  	<NavLink exact to= '/topic4'>
				    <div >Control of Microrobotic Swarms</div>
			  	</NavLink>
			  	</li>
			  </ul>	
		  </div> 
		  <div class="col-12 col-md-10 ress">
		   <h1 className="fw10 b">Research at SpencerLab </h1> 
				<Topic1 />
		    	<Topic2 />		 
		    	<Topic3 />
		    	<Topic4 />
		  </div>
		</div>
  );
}

export default Research;
