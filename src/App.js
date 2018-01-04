import React, { Component } from 'react'

import logo from './logo.svg'

import './App.css'
import 'semantic-ui-css/semantic.min.css'; //for semantic-ui-css

import RottenAverageContainer from './container/RottenAverageContainer'


class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1>Welcome to Rotten Average</h1>
            <h2>
              Rotten Average = (Tomato Meter + Audience Score) / 2
            </h2>
            <p>
              Rotten Average takes a Rotten Tomatoes URL as input and returns the average score of that movie or TV show season.
              <br></br>
              Rotten Averages above 50 are colored red, for freshness.
              <br></br>
              Rotten Averages 50 and below are colored green, for rotten.
            </p>
          </header>

          <RottenAverageContainer />

          <div className="App-footer">
            <span>Rotten Average</span>
          </div>

        </div>
      )
    }
  }

export default App
