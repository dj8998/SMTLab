import React from 'react';
import './Publication.css';
import PublicationList from './PublicationList.js';


const Publication = () => {
  return (
  		<div class="row">
		  <div class="col-6 col-md-2 leftsection">
			  <h2>Publication</h2>
			  <ul className = 'leftlist'>
			  	<li><a href = "#2019">2019</a></li>
			  	<li><a href = "#2018">2018</a></li>
			  	<li><a href = "#2017">2017</a></li>
			  	<li><a href = "#2016">2016</a></li>
			  	<li><a href = "#2015">2015</a></li>
			  	<li><a href = "#2014">2014</a></li>
			  	<li><a href = "#2013">2013</a></li>
			  	<li><a href = "#2010">2010</a></li>
			  	<li><a href = "#2007">2007</a></li>
		  </ul>	
		  </div> 
		  <div class="col-12 col-md-10 ress mab3">
		   <h1 className="bb pv3 ">Publication </h1> 
		   <PublicationList />
		  </div>
		</div>
  );
}

export default Publication;
