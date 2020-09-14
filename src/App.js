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
          <h1>
            React Web Home
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
