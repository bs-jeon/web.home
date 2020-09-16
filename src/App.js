import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NaverMapLoading from './NaverMap';
import {awsRestApi} from './pcpAws'

class App extends Component{

  state = {
    AWS_QueryState: false
  };

  componentDidMount() {
    awsRestApi();
  }

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
