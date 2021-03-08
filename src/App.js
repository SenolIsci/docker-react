import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bye there!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          An example of Prod-grade Workflow.React app, node.js as backend server.Example on AWS, tested by travis, codebase is in github. All updates and tests are automatically done.

        </a>
      </header>
    </div>
  );
}

export default App;
