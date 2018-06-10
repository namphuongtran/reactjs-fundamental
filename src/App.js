import React, { Component } from 'react';
import Product from './Product';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {

    return (
      <div className="app-wrapper">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React Shopping</h1>
        </header>
        <section>
          <p className="app-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div className="app-body">
            <Product />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
