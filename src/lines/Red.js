import React, { Component } from 'react';
import '../App.css'

class Red extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stops: []
    }
  }

  handleClick() {
    console.log('red clicked')
  }

  render() {
    return (
      <div onClick={() => this.handleClick()} id="red-line" className="line red">Red</div>
    )
  }
}

export default Red
