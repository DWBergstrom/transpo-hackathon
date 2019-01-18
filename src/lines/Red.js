import React, { Component } from 'react';
import '../App.css'


class Red extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stops: []
    }
  }

  render() {

    return (
      <React.Fragment>
        <div onClick={() => this.props.onClick()} id="red-line" className="line red">Red</div>
      </React.Fragment>
    )
  }
}

export default Red
