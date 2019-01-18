import React, { Component } from 'react'
import './App.css'
import Red from './lines/Red.js'
import Orange from './lines/Orange.js'
import Blue from './lines/Blue.js'
import Green from './lines/Green.js'
import Stops from './stops/Stops.js'
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
const stopsMap = require('./geojson.js')


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stopsStateMap: '',
      stops: []
    }
  }

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHdiZXJnc3Ryb20iLCJhIjoiY2pyNXJnN3h1MDBwbTN6cGR6djd5bjBkayJ9.tuvJAwqYL01mycIQRWC9WQ'
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9',
      scrollZoom: true,
      center: [-71.04,42.36],
      zoom: 9.5
    })

    this.setState({stopsStateMap: map})

  }

  handleClick(id) {
    console.log('map in state: ', this.state.stopsStateMap)
    const redStops = ['Alewife', 'Davis', 'Porter', 'Harvard', 'Central']
    const orangeStops = ['Oak Grove', 'Malden', 'Wellington', 'Assembly', 'Sullivan']
    const orangeCoords = [
      [-71.07082632854296,42.43750459704686],
      [-71.07431521650399, 42.426580981189915],
      [-71.0771174392871,42.40174005282045]
    ]
    const blueStops = ['Wonderland', 'Revere Beach', 'Beachmont', 'Suffolk Downs', 'Orient Heights']
    const greenStops = ['Lechmere', 'Science Park', 'North Station', 'Haymarket', 'Gov\'t Center']
    this.setState({stops: redStops})

    switch (id) {
      case 'red':
        this.setState({stops: redStops})
        break
      case 'orange':
        this.setState({stops: orangeStops})
        orangeCoords.forEach(coord => {
          const marker = new mapboxgl.Marker()
            .setLngLat(coord)
            .addTo(this.state.stopsStateMap)
        })
        break
      case 'blue':
        this.setState({stops: blueStops})
        break
      case 'green':
        this.setState({stops: greenStops})
        break
      default:
      this.setState({stops: []})
      this.componentDidMount()
      break
    }
  }


  render() {

    return (
      <React.Fragment>
        <header>
          <h1 data-id={"mbta"} onClick={() => this.handleClick('mbta')}>MBTA</h1>
        </header>
        <div className="map-container" ref={el => this.mapContainer = el}></div>
        <div className="line-container">
          <Red data-id={"red"} onClick={() => this.handleClick('red')}/>
          <Orange data-id={"orange"} onClick={() => this.handleClick('orange')}/>
          <Blue data-id={"blue"} onClick={() => this.handleClick('blue')}/>
          <Green data-id={"green"} onClick={() => this.handleClick('green')}/>
        </div>
        <div className="stops-container">
          <Stops line={this.state.stops}/>
        </div>
      </React.Fragment>
    )
  }
}

export default App
