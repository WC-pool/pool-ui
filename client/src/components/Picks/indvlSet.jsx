import'babel-polyfill';
import React from 'react';
import axios from 'axios';
import url from '../../config';
import Groups from '../Picks/WCgroups';


class indvlSet extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      setData: null
    }
  }

  async componentWillMount () {
    let data = await axios.get(`${url.restServer}/api/picks/getIndvlSet`, {params: {id: this.props.match.params.id}})
    this.setState({setData: data.data.rows[0]})
    console.log('info', this.state.setData)
  }

  render () {
   if (this.state.setData === null) {
     return (
       <div>Loading Picks</div>
     )
   } else {
     return (
      <div>
        <div>
          <h4>{this.state.setData.pickername}'s</h4>
          <p>"{this.state.setData.name}"</p>
        </div>
        <div>
          <div>
            Group A
            <p>1. {this.state.setData.groupa1}</p>
            <p>2. {this.state.setData.groupa2}</p>
          </div>
          <div>
            Group B
            <p>1. {this.state.setData.groupb1}</p>
            <p>2. {this.state.setData.groupb2}</p>
          </div>
          <div>
            Group C
            <p>1. {this.state.setData.groupc1}</p>
            <p>2. {this.state.setData.groupc2}</p>
          </div>
          <div>
            Group D
            <p>1. {this.state.setData.groupd1}</p>
            <p>2. {this.state.setData.groupd2}</p>
          </div>
          <div>
            Group E
            <p>1. {this.state.setData.groupe1}</p>
            <p>2. {this.state.setData.groupe2}</p>
          </div>
          <div>
            Group F
            <p>1. {this.state.setData.groupf1}</p>
            <p>2. {this.state.setData.groupf2}</p>
          </div>
          <div>
            Group G
            <p>1. {this.state.setData.groupg1}</p>
            <p>2. {this.state.setData.groupg2}</p>
          </div>
          <div>
            Group H
            <p>1. {this.state.setData.grouph1}</p>
            <p>2. {this.state.setData.grouph2}</p>
          </div>
          <div>
            <Groups />
          </div>
        </div>
      </div>
      )
    }
  }
}

export default indvlSet;