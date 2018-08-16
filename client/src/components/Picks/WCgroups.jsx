import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import './WCgroups.css';

class Groups extends React.Component {

  render () {
    return (
      <div className='groups'>
        <div className='group A'> Group A
        <ul>
          <li>Uruguay</li>
          <li>Russia</li>
          <li>Saudi Arabia</li>
          <li>Egypt</li>
        </ul>
      </div>
      <div className='group B'> Group B
        <ul>
          <li>Spain</li>
          <li>Portugal</li>
          <li>Iran</li>
          <li>Morocco</li>
        </ul>
      </div>
      <div className='group C'> Group C
        <ul>
          <li>France</li>
          <li>Denmark</li>
          <li>Peru</li>
          <li>Australia</li>
        </ul>
      </div>
      <div className='group D'> Group D
        <ul>
          <li>Croatia</li>
          <li>Argentina</li>
          <li>Nigeria</li>
          <li>Iceland</li>
        </ul>
      </div>
      <div className='group E'> Group E
        <ul>
          <li>Brazil</li>
          <li>Switzerland</li>
          <li>Serbia</li>
          <li>Costa Rica</li>
        </ul>
      </div>
      <div className='group F'> Group F
        <ul>
          <li>Sweden</li>
          <li>Mexico</li>
          <li>South Korea</li>
          <li>Germany</li>
        </ul>
      </div>
      <div className='group G'> Group G
        <ul>
          <li>Belgium</li>
          <li>England</li>
          <li>Tunisia</li>
          <li>Panama</li>
        </ul>
      </div>
      <div className='group H'>  Group H
        <ul>
          <li>Colombia</li>
          <li>Japan</li>
          <li>Senegal</li>
          <li>Poland</li>
        </ul>
      </div>
    </div>
    )
  }
}

export default Groups;