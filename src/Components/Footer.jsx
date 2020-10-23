import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
           <div class="footer">
                  <a href="#default" class="logo1"><Image src= "assets/footlogo.png" /> </a>
                  <div class="footer-right">
                    <p>330 Spencer Lab </p>
                    <p>Newark, Delaware 19716</p>
                    <p>Phone: 302-831-0149</p>
                  </div>
             </div>
      
  );
}

export default Footer

