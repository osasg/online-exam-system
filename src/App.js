import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Register from './pages/auth/register/Register';
import Login from './pages/auth/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ExamPage from './pages/exam/ExamPage'
import { ExamingProvider } from './context/ExamingContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ExamingProvider>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login}/>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/exam" component={ExamPage} />
          </ExamingProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
