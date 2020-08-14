import React from 'react';
import logo from './logo.svg';
import './App.css';

import { CrossStorageClient } from 'cross-storage'

function App() {
  const storage = new CrossStorageClient('https://cross-domain-server.herokuapp.com/');

  storage.onConnect()
    .then(() => storage.set('key', JSON.stringify({ foo: 'bar' })))
    .then(() => console.warn(storage.get('any_key', 'app-1')))
    .then(() => console.warn(storage._hub.Storage))
    .catch(console.error)

  console.warn(storage.getKeys())

  window.crossStorage = storage

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
