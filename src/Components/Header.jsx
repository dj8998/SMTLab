import React from 'react';
import {Image} from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';


function myfunc() {
	var i = prompt("Enter The Username:");
	var j = prompt("Enter The Password:");
	if (i === "udel" && j === "udel123") {
	  document.getElementById("hell").onclick = window.location.replace('/dfhifzck34');
	}
	else{
	alert("incorrect credetial");
	document.getElementById("hell").onclick = window.location.replace('/');
}
}


class Header extends React.Component  {
	render(){
  return (
	  			<div class="header">
				  <a class="logo">
			      <Link to="/">   
				  <Image src= "assets/ud_logo.png" /> 
				  </Link>

				  </a>
				  <a className = 'headding' >Welcome to SMT lab</a>
				  
				</div>

		
  );
}
}

export default Header;
