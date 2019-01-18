import React, { Component } from 'react'
import './App.css'
import Red from './lines/Red.js'
import Orange from './lines/Orange.js'
import Blue from './lines/Blue.js'
import Green from './lines/Green.js'
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
const stopsMap = require('./geojson.js')


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stopsStateMap: ''
    }

  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHdiZXJnc3Ryb20iLCJhIjoiY2pyNXJnN3h1MDBwbTN6cGR6djd5bjBkayJ9.tuvJAwqYL01mycIQRWC9WQ'
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      scrollZoom: true,
      center: [-71.04,42.36],
      zoom: 10
    })

    this.setState({stopsStateMap: map})

  }


  render() {

    return (

      <React.Fragment>
      <header>
        <h1>MBTA</h1>
      </header>
      <div className="map-container" ref={el => this.mapContainer = el}></div>
      <div className="line-container">
        <Red />
        <Orange />
        <Blue />
        <Green />
      </div>
      </React.Fragment>
    )
  }
}

export default App
