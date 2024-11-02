import React from 'react';
import './App.css';
import logo from './logo.svg'; // Assuming you are using the default React logo

function App() {
  const studentId = "101418595";
  const name = "Kalp Senghani";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <p>React JS Programming Week09 Lab exercise</p>
        <p>Student ID: {studentId}</p>
        <p>Name: {name}</p>
        <p>George Brown College, Toronto</p>
      </header>
    </div>
  );
}

export default App;