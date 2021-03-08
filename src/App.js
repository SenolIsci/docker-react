import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello there! This is an example of a prod-grade CI/CD workflow through integration: local(commit push to github) -> github (code base)-> travis (tests and deploys to)> AWS elastic beanstalk. </p>
      </header>
    </div>
  );
}

export default App;
