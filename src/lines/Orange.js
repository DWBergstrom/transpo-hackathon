import React, { Component } from 'react';
import '../App.css'

class Orange extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stops: []
    }
  }

  handleClick() {
    console.log('orange clicked')
  }

  render() {
    return (
      <div onClick={() => this.handleClick()} id="orange-line" className="line orange">Orange</div>
    )
  }
}

export default Orange
