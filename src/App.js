import React, { useState } from 'react';
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
    setKeys(keys);
  }

  const cleanKeys = async () => {
    await storage.clear();
    await getKeys();
  }

  return (
    <div className="App">
      <header className="App-header">
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
