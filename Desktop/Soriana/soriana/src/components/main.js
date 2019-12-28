import React from 'react';
import './custom.css';
import bigb from './images/bigb.jpg';
import jacks from './images/jacks.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Products from './ProductCards';

import './slides.css';
import mybg from './images/mybg.png';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
class Home extends React.Component {
  
    constructor(props) {
      super(props);
      
    }
  
    render() {
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
        <div className="mySlidez">
          
        <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
              <div className="backgroundImage">
              <img src={bigb}></img>
             <div className="imageText">
               <h1>Women's collections</h1>
        
               <p>Vintage is always unique. Be unique and stand out from the crowd </p>
               <Link><span>Shop now</span></Link>
             </div>
              </div>
            
            
            </div>
        
          <div className="each-slide">
          <div className="backgroundImage">
              <img src={mybg}></img>
              <div className="imageText">
                <h1>Men's collections</h1>
                <p>Men are strong, working in tough envirnments. You need a trong material!</p>
                <Link><span>Shop now</span></Link>

              </div>
              </div>
              
            </div>
        
            <div className="each-slide">
          <div className="backgroundImage">
              <img src={jacks}></img>
          <div className="imageText">
            <h1>Kid's collections</h1>
            <p>Your kid/s deserve a special gift. Come and collect from us</p>
            <Link><span>Shop now</span></Link>
          </div>
              </div>
             
            </div>
        </Slide>
      </div>


      <div className="sideBox">
        <Link>Delivery Services</Link>
        <Link>Collection Centers</Link>
        <Link>Wholesale policies</Link>
      </div>
        </div>
         
      
      <Products/>
        </div>

      );
      }
  }
  export default Home;