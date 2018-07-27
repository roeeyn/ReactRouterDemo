import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
