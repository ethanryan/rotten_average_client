import React, { Component } from 'react'

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
