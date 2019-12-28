import React from 'react';

import gabu from './assets/gabu.jpg';
import './custom.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Dropdown,ButtonToolbar,Col,Row, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';


class Products extends React.Component {
  constructor(props) {
    super(props);
    
    
  }

  render() {
    return (
   <div className="container products">
       <div className="shopMore">
       <h3> Women's top selections
      </h3>
      <Link to="/Womens">
      <a href="#">go to women's collections</a>
      </Link>
     
       </div>
      
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
       <div className="shopMore">
       <h3> Kid's top selections
      </h3>
      <Link to="/Kids">
      <a href="#">go to kids collections</a>
      </Link>
      
       </div>
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
       <div className="shopMore">
       <h3> Men's top selections
      </h3>
      <Link to="/Mens">
      <a href="#">go to men's collections</a>
      </Link>
   
       </div>
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
       
       
   </div>
    );
    }
}
export default Products;