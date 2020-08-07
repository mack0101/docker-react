import React from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          now it works
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// map local files to what's inside a docker container
// docker run -it -p 3000: 3000 -v /app/node_modules -v $(pwd):app bd036fa25085

export default App;
