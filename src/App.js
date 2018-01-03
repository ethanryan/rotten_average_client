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
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to RottenAverage</h1>
          </header>

          <RottenAverageContainer />
          {/* <p>above is everything rendered from UrlContainer -- both forms</p> */}

          {/* <p>This is the App.js page.</p> */}
          <div className="App-footer">
            <span>RottenAverage</span>
          </div>

        </div>
      )
    }
  }

export default App
