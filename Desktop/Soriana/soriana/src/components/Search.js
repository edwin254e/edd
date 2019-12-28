import React from 'react';
import './custom.css';
import { Button, Col,Row, FormGroup, Label, Input, FormText } from 'reactstrap';


class Search extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
    <div className="Search">
     <div className="topNav">
<div className="topLogo">
     Your Town:{" "}  
<select>

    <option value="Nairobi" selected>Nairobi</option>
    <option value="Kitale">Kitale</option>
    <option value="Eldoret">Eldoret</option>
    <option value="Thika">Thika</option>
    <option value="Bungoma">Bungoma</option>
</select>
</div>
<div className="topForm">
<form>
    <input type="text" placeholder=" Search for kids products, women and men's categories"></input>
    <button>Search</button>
</form>
</div>
<div className="topIcons">
    <ul>
        <li>facebook</li>
        <li>twitter</li>
        <li>0717147007</li>
    </ul>

</div>
     </div>
 
    </div>
    );
    }
}
export default Search;