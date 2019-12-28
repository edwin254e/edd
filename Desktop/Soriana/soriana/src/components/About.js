import React from 'react';
import './slides.css';
import mybg from './images/mybg.png';
import { Slide } from 'react-slideshow-image';
 


 
const About= () => {
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        onChange: (oldIndex, newIndex) => {
          console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
      }
       
    const slideImages = [
      
      ];
       
    return (
      <div className="container">
      <p>Welcome to about us page</p>
      </div>
    )
}
export default About;