import React, { Component } from 'react';
import './App.css';
import './components/shared/header';
import Header from "./components/shared/header";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header/>
        </div>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
