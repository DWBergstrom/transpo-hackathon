import React, { Component } from 'react';
import '../App.css'

class Stops extends Component {

  render() {
    let stops
    console.log('props in Stops: ', this.props)
    stops = this.props.line.map(stop => {
      console.log(stop)
      return (
        <Stop name={stop} key={stop}/>
      )
    })
    console.log('stops is now: ', stops)
    return (
      <React.Fragment>{stops}</React.Fragment>
    )
  }

}

function Stop(props) {
  console.log('props in Stop: ', props)
  return (
    <div className="single-stop">{props.name}</div>
  )
}

export default Stops
