import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import Route1 from './pages/Route1'
import Route2 from './pages/Route2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>I am App!</p>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Route1} path="/route1" />
          <Route component={Route2} path="/route2" />
        </Switch>
      </div>
    )
  }
}

export default App
