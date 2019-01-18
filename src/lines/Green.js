import React, { Component } from 'react';
import '../App.css'

class Green extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stops: []
    }
  }

  render() {
    return (
      <div onClick={() => this.props.onClick()} id="green-line" className="line green">Green</div>
    )
  }
}

export default Green
