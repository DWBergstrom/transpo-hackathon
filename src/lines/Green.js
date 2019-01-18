import React, { Component } from 'react';
import '../App.css'

class Green extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stops: []
    }
  }

  handleClick() {
    console.log('green clicked')
  }

  render() {
    return (
      <div onClick={() => this.handleClick()} id="green-line" className="line green">Green</div>
    )
  }
}

export default Green
