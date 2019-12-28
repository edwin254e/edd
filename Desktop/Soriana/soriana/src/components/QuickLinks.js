import React from 'react';
import Home from './components/main';
import Menu from './components/menuBar';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Dropdown,ButtonToolbar,Col,Row, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';


class LinkButtons extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
<div className="myLinks">
    <div className="linkItems">
         <a href="#">New Arival</a>
    </div>
    <div className="linkItems">
         <a href="#">New Clothes</a>
         </div>
         <div className="linkItems">
         <a href="#">Sell with Us</a>
         </div>
         <div className="linkItems">
         <a href="#">Collections</a>
         </div>
</div>
    );
    }
}
export default LinkButtons;