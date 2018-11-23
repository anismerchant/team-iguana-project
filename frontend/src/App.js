import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* TODO: Add Routes and Components */}
        <TopBar />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
