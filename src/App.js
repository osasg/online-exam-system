import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Home from './home/Home';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          {/* <Route path="/register" exact component={Resigter} /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
