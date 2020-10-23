import React from 'react';
import './Team.css';
import {Image, Row, Col} from 'react-bootstrap';


const Team = () => {
  return (
  	<div className = "bodyy">
		  		<header class="bg-dark text-center py-5 mb-0 bt bw2">
				  <div class="container ">
				    <h1 class="font-weight-light text-white">Meet the Team</h1>
				  </div>
				</header>

		<div class="jumbotron">
		<Row>
		    <Col sm={3} className="mt2">
		     <Image className="imgsam" src= "assets/sam.PNG" width= "100%" height = "auto"/>
		    </Col>

		    <Col sm={6}>
		    	 <h3 className="display-4 b fw9">Sambeeta Das</h3>
		    	<p class="lead">	
		    	Assistant Professor <br />
		    	Departmen of Mechanical Engineering
		    	</p>

     			  <hr class="my-4" />
				  <p>Dr. Sambeeta ‘Sam’ Das is an assistant professor at the University of Delaware in the Mechanical Engineering Department. Before joining the University of Delaware, Dr. Das was a postdoctoral researcher for three years at the University of Pennsylvania. She was part of the GRASP Lab where she worked on microrobotic control and application of microrobots in biological systems. She earned her Ph.D. at the Pennsylvania State University in 2016 and her doctoral research was on directing micro and nanomotors and their applications in lab-on-a chip devices. Prior to her doctoral studies, she earned her Masters with distinction from the University of London and her Bachelors in Physics from Presidency College, India. She is the recipient of multiple awards including a graduate fellowship from the Pennsylvania State University, the overseas research award fellowship from the government of United Kingdom, and the Science and Engineering Excellence Fellowship from the University of London.</p>
				  
				  <p class="lead bt">
				  <a href= "https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:ed432312-5346-4db6-9783-c18523a2c242" target="_blank" className = "black">  Click here to see CV </a>
			  </p>
			  </Col>

			 <Col sm={3} className= "mt1">
		     <div className= "border-1 shadow-5 pa1  ">
		     <h4 className="fw9 b mb-0" >EDUCATION </h4><br/>
			<p className= "fw1 i">	PhD, Pennsylvania State University, USA <br/>
				MSc, University of London, UK<br/>
				BSc, Presidency College, India <br/> </p>

			  <h4 className="fw9 b mt4 mb-0" >FACULTY EXPERTISE </h4><br/>
			  <p className="fw1 i">
				Biomechanics <br/>
				Fluid Mechanics<br/>
				Materials Engineering<br/>
				Nanotechnology<br/>
			  </p>

			   <h4 className="fw9 mt4 mb-0" >RESEARCH AREAS </h4><br/>
			  <p className="fw1 i">
				Biomechanical Engineering <br/>
				Clean Energy & Environment<br/>
				Nanotechnology<br/>
				Robotics & Controls<br/>
			  </p>
		     </div>
		    </Col>
		    </Row>
		</div>
 
	 
		<header class="bg-dark text-center py-5 mb-0 mt0 bt bw2 ">
				    <h1 class="font-weight-light text-white">STUDENTS</h1>
		</header>

		<div class=" ">
		  <div class="row ">
		    
		 
		    <div class="col-6 col-md-4 mb-6">
		      <div class="card border-0 shadow-5 pa2 br2 ba b--black-10">
		       	<Image src= "assets/max.png" width= "100%" height = "auto"/>
		        <div class="card-body text-center">
		          <h5 class="card-title mb-0 fw5">Max Sokolich</h5>
		          <div class="card-text fw4 b ">Department of Mechanical Engineering <br />University of Delaware </div>
		        </div>
		      </div>
		    </div>
		 
		    <div class="col-6 col-md-4 mb-6">
		      <div class="card border-0 shadow-5 pa2">
		        <Image src= "assets/zain.jpg" width= "100%" height = "auto"/>
		        <div class="card-body text-center">
		          <h5 class="card-title mb-0">Zain Aslam</h5>
		          <div class="card-text  fw4 b">Department of Mechanical Engineering<br />University of Delaware</div>
		        </div>
		      </div>
		    </div>

		    <div class="col-6 col-md-4 mb-6">
		      <div class="card border-0 shadow-5 pa2">
		        <Image src= "assets/marc.JPG" width= "100%" height = "auto"/>
		        <div class="card-body text-center">
		          <h5 class="card-title mb-0">Marc Woolley</h5>
		          <div class="card-text  fw4 b">Department of Biomedical Engineering<br />University of Delaware</div>
		        </div>
		      </div>
		    </div>
		   
		    
		  </div>
		</div>

		<header class="bg-dark text-center py-5 mb-0 bt bw2">
				  <div class="container ">
				    <h1 class="font-weight-light text-white">Former Team Members</h1>
				  </div>
				</header>

			<div class="row ">
			 <div class="col-6 col-md-4 mb-6">
		      <div class="card border-0 shadow-5 pa2">
		        <Image src= "assets/blank.png" width= "100%" height = "auto"/>
		        <div class="card-body text-center">
		          <h5 class="card-title mb-0">Andrii Tiurkin </h5>
		          <div class="card-text  fw4 b">PhD Student, Department of Mechanical Engineering</div>
		        </div>
		      </div>
		    </div>

		     <div class="col-6 col-md-4 mb-6">
		      <div class="card border-0 shadow-5 pa2">
		        <Image src= "assets/blank.png" width= "100%" height = "auto"/>
		        <div class="card-body text-center">
		          <h5 class="card-title mb-0">Austin Maaddi </h5>
		          <div class="card-text  fw4 b">Junior, Department of Mechanical Engineering</div>
		        </div>
		      </div>
		    </div>

		     <div class="col-6 col-md-4 mb-6">
		      <div class="card border-0 shadow-5 pa2">
		        <Image src= "assets/blank.png" width= "100%" height = "auto"/>
		        <div class="card-body text-center">
		          <h5 class="card-title mb-0">Catherine Puloso  </h5>
		          <div class="card-text  fw4 b">Freshman,  Department of Mechanical Engineering</div>
		        </div>
		      </div>
		    </div>
		</div>
	</div>
  );
}

export default Team;
