import React from 'react';
import {Provider} from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import Store from './store'

import Navbar from "../src/components/Navbar"
import Landing from "../src/components/Landing"
import User from "../src/components/User"
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/user/:username" component={User}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
