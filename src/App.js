import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Home from './home/Home';
import Register from './register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
