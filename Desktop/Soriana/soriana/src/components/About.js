import React from 'react';
import './slides.css';
import mybg from './images/mybg.png';
import { Slide } from 'react-slideshow-image';
 


 
const Slideshow = () => {
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
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
              <div className="backgroundImage">
              <img src={mybg}></img>
              </div>
            
              <span>Slide 1</span>
            </div>
        
          <div className="each-slide">
          <div className="backgroundImage">
              <img src={mybg}></img>
              </div>
              <span>Slide 2</span>
            </div>
        
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;