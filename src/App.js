import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NaverMapLoading from './NaverMap';

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < NaverMapLoading />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>
            Hello React
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
