import React from "react";
import logo from "./assets/Moby-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ marginBottom: "60px" }}
        />
        <p>React + Docker + AWS Beanstalk!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Docker
        </a>
      </header>
    </div>
  );
}

export default App;
