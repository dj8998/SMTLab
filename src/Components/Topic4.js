import React, {Component} from 'react';
import './Topic2.css';
import {Image} from 'react-bootstrap';
import ReactPlayer from 'react-player';

const Topic4 = () => {

  return (
    		<div>
    			<header class="bg-dark text-center py-5 mb-0 bt bw2">
				  <div class="container ">
				    <h1 class="font-weight-light text-white">Control of Microrobotic Swarms</h1>
				</div>
				</header>
				<div className= 'topic2'>
				<box className="boxxx">
					<h3 className= "tc pa5 ba bw2 shadow-4">Inspired by the self-organized large-scale structures found in nature, our lab is interested in designing control schemes for controlling microrobotic swarm behaviors. </h3>
					<ReactPlayer
				          controls= 'false'
				          playing = 'true'
				          loop= 'true'
				          className='react-player '
				          url='https://youtu.be/jziFLPgucXk'
				          width='80%'
				          height= '500px'
				        />
					<Image src= "assets/topic4.png" width= "70%" height = "auto"/>
				</box>
				</div>
    		</div>

      )
   
}


export default Topic4;