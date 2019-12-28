import React from 'react';
import Home from './components/main';
import Menu from './components/menuBar';
import './App.css';
import './components/custom.css';
import Search from './components/Search';
import Footer from './components/footer' ;
import Women from './components/Womens';
import Mens from './components/Mens';
import Kid from './components/Kids';
import About from './components/About';
import Contact from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import { Button, Dropdown,ButtonToolbar,Col,Row, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';


class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <BrowserRouter>
 <div className="App ">
      <div className="myNavBar">
        <Search/>
         <Menu/>
        </div>
        <Switch>
        <Route  exact path='/Home' component={Home}/>

<Route path='/Womens' component={Women}/>
<Route path="/Mens" component={Mens} />
<Route path="/Kids" component={Kid}/>
<Route path="/Contacts" component ={Contact}/>
<Route path="/About" component={About}/>
        </Switch>
      
        <div className="footer">
<Footer/>


</div>
    </div>
      </BrowserRouter>
   
    );
    }
}
export default App;