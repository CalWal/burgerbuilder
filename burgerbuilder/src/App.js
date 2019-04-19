import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout/Layout.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <p>Testing</p>
        </Layout>
      </div>
    );
  }
}

export default App;
