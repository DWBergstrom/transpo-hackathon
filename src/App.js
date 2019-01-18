import React, { Component } from 'react'
import './App.css'
import Red from './lines/Red.js'
import Orange from './lines/Orange.js'
import Blue from './lines/Blue.js'
import Green from './lines/Green.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <header>
        <h1>MBTA</h1>
      </header>
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
