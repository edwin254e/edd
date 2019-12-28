import React from 'react';
import './custom.css';
import logo from './assets/logo.png';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
  <div>
   <header>
   <nav class="nav">
 <div className="myLogo">
   <Link to="/Home">
   <img src={logo} alt="" srcset=""/>
   </Link>
  
 </div>
     <div className="nav-items">
       <ul>
         <Link to="/Womens">  <li>Women's</li></Link>
         <Link to="/Mens"><li>Men's</li></Link>
         <Link to="/Kids"><li>Kid's</li></Link>
         <Link to="About"><li>About Us</li></Link>
         <Link to="Contacts"><li>Contacts</li></Link>
       </ul>
     </div>
     <div className="nav-items">
       <ul>
         <Link to="Login"><li>Login</li></Link>
         <Link to ="SignUp"> <li>SignUp</li></Link>
         <Link to="help"><li>help</li></Link>
         
       </ul>
     </div>
    
  </nav>
    <hr></hr>


   </header>
    
  </div>
    );
  }
}
export default Menu;