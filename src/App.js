import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Home from './home/Home';
import Register from './register/Register';
import Login from './login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
