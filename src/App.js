import React, { Component } from 'react';
import './App.css';
import { Header } from './components';
import { MainViewer } from './viewer' 

class App extends Component{
  render() {
    return (
      <div>
        <Header />
        <MainViewer />
      </div>
    );
  }
}

export default App;
