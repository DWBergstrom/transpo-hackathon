import React, { Component } from 'react';
import '../App.css'

class Blue extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stops: []
    }
  }

  handleClick() {
    console.log('blue clicked')
  }

  render() {
    return (
      <div onClick={() => this.handleClick()} id="blue-line" className="line blue">Blue</div>
    )
  }
}

export default Blue
