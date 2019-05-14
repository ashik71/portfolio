import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import HeaderBody from './components/headerbody';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <HeaderBody/>
      </div>
    );
  }
}

export default App;
