import React, { Component } from 'react';
import '../App.css'

class Blue extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stops: []
    }
  }

  render() {
    return (
      <div onClick={() => this.props.onClick()} id="blue-line" className="line blue">Blue</div>
    )
  }
}

export default Blue
