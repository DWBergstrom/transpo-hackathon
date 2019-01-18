import React, { Component } from 'react';
import '../App.css'

class Orange extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stops: []
    }
  }

  render() {
    return (
      <div onClick={() => this.props.onClick()} id="orange-line" className="line orange">Orange</div>
    )
  }
}

export default Orange
