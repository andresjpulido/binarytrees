import React, { Component, Button } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Search from './containers/search'
import Definition from './containers/definition'
import Creation from './containers/creation'
import Types from './containers/types'
import Simulator from './containers/simulator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header /><br /><br /><br />
            <Switch>
              <Route
                path="/"
                exact
                component={Definition}
                model="1"
              />
              <Route
                path="/home"
                exact
                component={Definition}
              />
              <Route
                path="/types"
                exact
                component={Types}
              />
              <Route
                path="/creation"
                exact
                component={Creation}
              />
              <Route
                path="/search"
                exact
                component={Search}
              />
              <Route
                path="/definition"
                exact
                component={Definition}
              />
              <Route
                path="/simulator"
                exact
                component={Simulator}
              />
              <Route
                path="/newea"
                exact
                component={Search}
              />
              <Redirect to="/" />
            </Switch>
            <br /><br /><br /><br /><br />
          </div>
        </BrowserRouter >
        <Footer />
      </div >
    );
  }
}

export default App;
