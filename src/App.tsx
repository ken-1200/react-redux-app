import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // props
  const profile = [
    { name: "Machida", age: "23" },
    { name: "Machida.jr", age: "3" },
    { name: "不明" },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <label htmlFor="test">Test</label>
      <input type="text" onChange={ () => { console.log("test") } } />

      {
        profile.map((profile, index) => {
          return <User name={ profile.name } age={ profile.age } key={ index } />
        })
      }
    </div>
  );
}

const User = (prpos: any) => {
  return (
    <div>
      Wow! {prpos.name}! {prpos.age}.
    </div>
  )
}

User.defaultProps = {
  age: 1
}

export default App;
