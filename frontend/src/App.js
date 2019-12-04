import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Integracao from './components/pages/integracao';
import Hotel from './components/pages/hotel';

import styles from './App.css'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="MainContent">
          <Router>
            <Switch>
              <Route path='/' exact>
                <Integracao />
              </Route>
              <Route path='/reservations' >
                <Hotel />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

export default App
