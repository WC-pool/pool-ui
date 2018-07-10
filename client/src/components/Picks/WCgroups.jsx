import 'babel-polyfill';
import React from 'react';
import axios from 'axios';

class Groups extends React.Component {

  render () {
    return (
      <div>
        <div> Group A
        <ul>
          <li>Uruguay</li>
          <li>Russia</li>
          <li>Saudi Arabia</li>
          <li>Egypt</li>
        </ul>
      </div>
      <div> Group B
        <ul>
          <li>Spain</li>
          <li>Portugal</li>
          <li>Iran</li>
          <li>Morocco</li>
        </ul>
      </div>
      <div> Group C
        <ul>
          <li>France</li>
          <li>Denmark</li>
          <li>Peru</li>
          <li>Australia</li>
        </ul>
      </div>
      <div> Group D
        <ul>
          <li>Croatia</li>
          <li>Argentina</li>
          <li>Nigeria</li>
          <li>Iceland</li>
        </ul>
      </div>
      <div> Group E
        <ul>
          <li>Brazil</li>
          <li>Switzerland</li>
          <li>Serbia</li>
          <li>Costa Rica</li>
        </ul>
      </div>
      <div> Group F
        <ul>
          <li>Sweden</li>
          <li>Mexico</li>
          <li>South Korea</li>
          <li>Germany</li>
        </ul>
      </div>
      <div> Group G
        <ul>
          <li>Belgium</li>
          <li>England</li>
          <li>Tunisia</li>
          <li>Panama</li>
        </ul>
      </div>
      <div> Group H
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