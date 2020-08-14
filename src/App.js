import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { CrossStorageClient } from 'cross-storage'

function App() {
  const [keys, setKeys] = useState([])

  const storage = new CrossStorageClient('https://cross-domain-server.herokuapp.com/');

  storage.onConnect()
    .then(() => storage.set('key', JSON.stringify({ foo: 'bar' })))
    .catch(console.error)

  window.crossStorage = storage

  const getKeys = async () => {
    const keys = await storage.getKeys();

    setKeys(keys)

    return keys;
  }

  const cleanKeys = async () => {
    await storage.clear();
  }

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
        <button type="button" onClick={getKeys} >get keys</button>
        <button type="button" onClick={cleanKeys} >clean keys</button>
        <ul>
          {keys?.map(key => <li>{key}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
