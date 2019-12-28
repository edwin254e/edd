import React from 'react';

import gabu from './assets/gabu.jpg';
import './custom.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Dropdown,ButtonToolbar,Col,Row, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';


class Men extends React.Component {
  constructor(props) {
    super(props);
    
    
  }

  render() {
    return (
   <div className="container products">
      <input type="text" placeholder="search mens category: top or bottom"></input> <button>Search</button>
      
      <hr/>
       <div className=" myProducts">
          <a href="#">
          <div className="productDetails">
           <img src={gabu} alt="" srcset=""/>
        <span>official</span>
        <hr>
        </hr>
           
           <p>Long sleeved slim fit  floral men shirt </p>
           <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
          </a>
       <div className="productDetails">
           <img src={gabu} alt="" srcset=""/>
        <span>official</span>
        <hr>
        </hr>
           
           <p>Long sleeved slim fit  floral men shirt </p>
           <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
   
       <div className="productDetails">
       <img src={gabu} alt="" srcset=""/>
       <span>official</span>
        <hr>
        </hr>
           
       <p>Long sleeved slim fit  floral men shirt </p>
       <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
       <div className="productDetails">
       <img src={gabu} alt="" srcset=""/>
       <span>official</span>
        <hr>
        </hr>
           
       <p>Long sleeved slim fit  floral men shirt </p>
       <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
    
       
      
       </div>
      
       <div className=" myProducts">
          <a href="#">
          <div className="productDetails">
           <img src={gabu} alt="" srcset=""/>
        <span>official</span>
        <hr>
        </hr>
           
           <p>Long sleeved slim fit  floral men shirt </p>
           <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
          </a>
       <div className="productDetails">
           <img src={gabu} alt="" srcset=""/>
        <span>official</span>
        <hr>
        </hr>
           
           <p>Long sleeved slim fit  floral men shirt </p>
           <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
       <div className="productDetails">
       <img src={gabu} alt="" srcset=""/>
       <span>official</span>
        <hr>
        </hr>
       <p>Long sleeved slim fit  floral men shirt </p>
       <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
       <div className="productDetails">
       <img src={gabu} alt="" srcset=""/>
       <span>official</span>
        <hr>
        </hr>
           
       <p>Long sleeved slim fit  floral men shirt </p>
       <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
       
       </div>
     
       <div className=" myProducts">
          <a href="#">
          <div className="productDetails">
           <img src={gabu} alt="" srcset=""/>
        <span>official</span>
        <hr>
        </hr>
           
           <p>Long sleeved slim fit  floral men shirt </p>
           <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
          </a>
       <div className="productDetails">
           <img src={gabu} alt="" srcset=""/>
        <span>official</span>
        <hr>
        </hr>
           
           <p>Long sleeved slim fit  floral men shirt </p>
           <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
       <div className="productDetails">
       <img src={gabu} alt="" srcset=""/>
       <span>official</span>
        <hr>
        </hr>
       <p>Long sleeved slim fit  floral men shirt </p>
       <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
       <div className="productDetails">
       <img src={gabu} alt="" srcset=""/>
       <span>official</span>
        <hr>
        </hr>
           
       <p>Long sleeved slim fit  floral men shirt </p>
       <div className="addCart">
           <span>Ksh 455/=</span>
          <button className="showNumber">-30%</button>
           </div>
         
       </div>
       
       </div>
       
       
   </div>
    );
    }
}
export default Men;