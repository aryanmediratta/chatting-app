import React, { Component } from 'react';

import Chat from './pages/Chat';

import Profile from './pages/Profile';

import Home from './pages/Home';

import 'materialize-css/dist/css/materialize.min.css';

import { BrowserRouter as Router , Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <Router>
     <div>
     <Route exact path = '/profile/:userId' component = {Profile} />
     <Route exact path = '/chat' component = {Chat}  />
     <Route exact path = '/' component = {Home} />
     </div>
     </Router>
   );
  }
}

export default App;
