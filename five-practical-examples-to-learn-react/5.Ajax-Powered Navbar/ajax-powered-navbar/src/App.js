import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './navbar';

let items = [
  {
    text: 'Home',
    href: '/home'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  }
];

class App extends Component {

  render() {
    return (
      <div id="root">
        <Navbar items={items} />
      </div>
    );
  }
}

export default App;
