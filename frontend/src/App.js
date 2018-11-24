import React, { Component } from 'react';
// import './App.css';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import Main from './Main';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

