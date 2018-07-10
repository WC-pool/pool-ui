import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class setPicks extends React.Component {
  constructor (props) {
    super(props)

    this.submitPicksHandler =  this.submitPicksHandler.bind(this);
  }

  submitPicksHandler () {

  }

  render () {
    return (
      <div>
        <div>
        Choose a name for this set of picks 
          <div>
            <textarea id='name' placeholder='e.g. My Risky Picks'></textarea>
          </div>
        </div>
        <div>
          Select Group A Winner
        <select>
          <option value='uruguay'>Uruguay</option>
          <option value='russia'>Russia</option>
          <option value='saudiarabia'>Saudi Arabia</option>
          <option value='egypt'>Egypt</option>
        </select>
          Select Group A Runner-Up
        <select>
          <option value='uruguay'>Uruguay</option>
          <option value='russia'>Russia</option>
          <option value='saudiarabia'>Saudi Arabia</option>
          <option value='egypt'>Egypt</option>
        </select>
        </div>
      <br />
        <div>
          Select Group B Winner
        <select>
          <option value='spain'>Spain</option>
          <option value='portugal'>Portugal</option>
          <option value='iran'>Iran</option>
          <option value='morocco'>Morocco</option>
        </select>
          Select Group B Runner-Up
        <select>
          <option value='spain'>Spain</option>
          <option value='portugal'>Portugal</option>
          <option value='iran'>Iran</option>
          <option value='morocco'>Morocco</option>
        </select>
        </div>
      <br />
        <div>
          Select Group C Winner
        <select>
          <option value='france'>France</option>
          <option value='denmark'>Denmark</option>
          <option value='peru'>Peru</option>
          <option value='australia'>Australia</option>
        </select>
          Select Group C Runner-Up
        <select>
          <option value='france'>France</option>
          <option value='denmark'>Denmark</option>
          <option value='peru'>Peru</option>
          <option value='australia'>Australia</option>
        </select>
        </div>
      <br />
        <div>
            Select Group D Winner
        <select>
          <option value='croatia'>Croatia</option>
          <option value='argentina'>Argentina</option>
          <option value='nigeria'>Nigeria</option>
          <option value='iceland'>Iceland</option>
        </select>
            Select Group D Runner-Up
        <select>
          <option value='croatia'>Croatia</option>
          <option value='argentina'>Argentina</option>
          <option value='nigeria'>Nigeria</option>
          <option value='iceland'>Iceland</option>
        </select>
        </div>
      <br />
         <div>
            Select Group E Winner
         <select>
          <option value='brazil'>Brazil</option>
          <option value='switzerland'>Switzerland</option>
          <option value='serbia'>Serbia</option>
          <option value='costarica'>Costa Rica</option>
        </select>
            Select Group E Runner-Up
        <select>
          <option value='brazil'>Brazil</option>
          <option value='switzerland'>Switzerland</option>
          <option value='serbia'>Serbia</option>
          <option value='costarica'>Costa Rica</option>
        </select>
        </div>
      <br />
        <div>
            Select Group F Winner
        <select>
          <option value='sweden'>Sweden</option>
          <option value='mexico'>Mexico</option>
          <option value='southkorea'>South Korea</option>
          <option value='germany'>Germany</option>
        </select>
            Select Group F Runner-Up
        <select>
          <option value='sweden'>Sweden</option>
          <option value='mexico'>Mexico</option>
          <option value='southkorea'>South Korea</option>
          <option value='germany'>Germany</option>
        </select>
        </div>
      <br />
        <div>
            Select Group G Winner
        <select>
          <option value='belgium'>Belgium</option>
          <option value='england'>England</option>
          <option value='tunisia'>Tunisia</option>
          <option value='panama'>Panama</option>
        </select>
            Select Group G Runner-Up
        <select>
          <option value='belgium'>Belgium</option>
          <option value='england'>England</option>
          <option value='tunisia'>Tunisia</option>
          <option value='panama'>Panama</option>
        </select>
        </div>
      <br />
        <div>
            Select Group H Winner
        <select>
          <option value='colombia'>Colombia</option>
          <option value='japan'>Japan</option>
          <option value='senegal'>Senegal</option>
          <option value='poland'>Poland</option>
        </select>
            Select Group H Runner-Up
        <select>
          <option value='colombia'>Colombia</option>
          <option value='japan'>Japan</option>
          <option value='senegal'>Senegal</option>
          <option value='poland'>Poland</option>
        </select>
        </div>
      <br />
        <button>Submit Picks</button>
      
      </div>
    )
  }
}

export default setPicks;