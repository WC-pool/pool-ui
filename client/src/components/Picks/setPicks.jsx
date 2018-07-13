import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import url from '../../config';



class setPicks extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: null
    }

    this.submitPicksHandler = this.submitPicksHandler.bind(this);
  }

  async componentWillMount () {
    console.log(localStorage.getItem('activeUid'))
    const userId = await axios.get(`${url.restServer}/api/users/getUser`, {params: {uid: localStorage.getItem('activeUid')}});
    this.setState({id: userId.data.rows[0].id})

  }

  async submitPicksHandler () {
    console.log('inside NAME', localStorage.getItem('name'))
    let name = document.getElementById('name').value;
    let Awinner = document.getElementById('Awinner').value;
    let Arunner = document.getElementById('Arunner').value;
    let Bwinner = document.getElementById('Bwinner').value;
    let Brunner = document.getElementById('Brunner').value;
    let Cwinner = document.getElementById('Cwinner').value;
    let Crunner = document.getElementById('Crunner').value;
    let Dwinner = document.getElementById('Dwinner').value;
    let Drunner = document.getElementById('Drunner').value;
    let Ewinner = document.getElementById('Ewinner').value;
    let Erunner = document.getElementById('Erunner').value;
    let Fwinner = document.getElementById('Fwinner').value;
    let Frunner = document.getElementById('Frunner').value;
    let Gwinner = document.getElementById('Gwinner').value;
    let Grunner = document.getElementById('Grunner').value;
    let Hwinner = document.getElementById('Hwinner').value;
    let Hrunner = document.getElementById('Hrunner').value;

    try {
      let payload = {
        name: name,
        picker: this.state.id,
        pickername: localStorage.getItem('name').split(' ')[0],
        Awinner: Awinner,
        Arunner: Arunner,
        Bwinner: Bwinner,
        Brunner: Brunner,
        Cwinner: Cwinner,
        Crunner: Crunner,
        Dwinner: Dwinner,
        Drunner: Drunner,
        Ewinner: Ewinner,
        Erunner: Erunner,
        Fwinner: Fwinner,
        Frunner: Frunner,
        Gwinner: Grunner,
        Grunner: Grunner,
        Hwinner: Hwinner,
        Hrunner: Hrunner
      }
    
    const data = await axios.post(`${url.restServer}/api/picks/createPicks`, payload)
     } catch (err) {
       console.log('Error posting picks TO pg ', err)
     }

     this.props.history.push('/picks');
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
        <select id='Awinner'>
          <option value='uruguay'>Uruguay</option>
          <option value='russia'>Russia</option>
          <option value='saudiarabia'>Saudi Arabia</option>
          <option value='egypt'>Egypt</option>
        </select>
          Select Group A Runner-Up
        <select id='Arunner'>
          <option value='uruguay'>Uruguay</option>
          <option value='russia'>Russia</option>
          <option value='saudiarabia'>Saudi Arabia</option>
          <option value='egypt'>Egypt</option>
        </select>
        </div>
      <br />
        <div>
          Select Group B Winner
        <select id='Bwinner'>
          <option value='spain'>Spain</option>
          <option value='portugal'>Portugal</option>
          <option value='iran'>Iran</option>
          <option value='morocco'>Morocco</option>
        </select>
          Select Group B Runner-Up
        <select id='Brunner'>
          <option value='spain'>Spain</option>
          <option value='portugal'>Portugal</option>
          <option value='iran'>Iran</option>
          <option value='morocco'>Morocco</option>
        </select>
        </div>
      <br />
        <div>
          Select Group C Winner
        <select id='Cwinner'>
          <option value='france'>France</option>
          <option value='denmark'>Denmark</option>
          <option value='peru'>Peru</option>
          <option value='australia'>Australia</option>
        </select>
          Select Group C Runner-Up
        <select id='Crunner'>
          <option value='france'>France</option>
          <option value='denmark'>Denmark</option>
          <option value='peru'>Peru</option>
          <option value='australia'>Australia</option>
        </select>
        </div>
      <br />
        <div>
            Select Group D Winner
        <select id='Dwinner'>
          <option value='croatia'>Croatia</option>
          <option value='argentina'>Argentina</option>
          <option value='nigeria'>Nigeria</option>
          <option value='iceland'>Iceland</option>
        </select>
            Select Group D Runner-Up
        <select id='Drunner'>
          <option value='croatia'>Croatia</option>
          <option value='argentina'>Argentina</option>
          <option value='nigeria'>Nigeria</option>
          <option value='iceland'>Iceland</option>
        </select>
        </div>
      <br />
         <div>
            Select Group E Winner
         <select id='Ewinner'>
          <option value='brazil'>Brazil</option>
          <option value='switzerland'>Switzerland</option>
          <option value='serbia'>Serbia</option>
          <option value='costarica'>Costa Rica</option>
        </select>
            Select Group E Runner-Up
        <select id='Erunner'>
          <option value='brazil'>Brazil</option>
          <option value='switzerland'>Switzerland</option>
          <option value='serbia'>Serbia</option>
          <option value='costarica'>Costa Rica</option>
        </select>
        </div>
      <br />
        <div>
            Select Group F Winner
        <select id='Fwinner'>
          <option value='sweden'>Sweden</option>
          <option value='mexico'>Mexico</option>
          <option value='southkorea'>South Korea</option>
          <option value='germany'>Germany</option>
        </select>
            Select Group F Runner-Up
        <select id='Frunner'>
          <option value='sweden'>Sweden</option>
          <option value='mexico'>Mexico</option>
          <option value='southkorea'>South Korea</option>
          <option value='germany'>Germany</option>
        </select>
        </div>
      <br />
        <div>
            Select Group G Winner
        <select id='Gwinner'>
          <option value='belgium'>Belgium</option>
          <option value='england'>England</option>
          <option value='tunisia'>Tunisia</option>
          <option value='panama'>Panama</option>
        </select>
            Select Group G Runner-Up
        <select id='Grunner'>
          <option value='belgium'>Belgium</option>
          <option value='england'>England</option>
          <option value='tunisia'>Tunisia</option>
          <option value='panama'>Panama</option>
        </select>
        </div>
      <br />
        <div>
            Select Group H Winner
        <select id='Hwinner'>
          <option value='colombia'>Colombia</option>
          <option value='japan'>Japan</option>
          <option value='senegal'>Senegal</option>
          <option value='poland'>Poland</option>
        </select>
            Select Group H Runner-Up
        <select id='Hrunner'>
          <option value='colombia'>Colombia</option>
          <option value='japan'>Japan</option>
          <option value='senegal'>Senegal</option>
          <option value='poland'>Poland</option>
        </select>
        </div>
      <br />
        <button onClick={this.submitPicksHandler}>Submit Picks</button>
      
      </div>
    )
  }
}

export default setPicks;