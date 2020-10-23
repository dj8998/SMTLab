import React, {Component} from 'react';
import './Support.css';
import { Transition } from 'react-transition-group';


const Support = () => {

  return (
    		<section id="banner">
				<div class="inner">
					<h1>Industrious</h1>
					<p>A responsive business oriented template with a video background<br />
					designed by TEMPLATED and released under the Creative Commons License.</p>
				</div>
				 <video id="background-video" loop autoPlay>
                <source src="assets/top1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            	</video>
			
			</section>

      )
   
}


export default Support;
