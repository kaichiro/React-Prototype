import * as React from "react";
import "./App.css";
import logo from "./logo.svg";

// import CardGroupComponent from "./components/semantic/cardGroup/CardGroupComponent";
import { Link } from "react-router-dom";
// import HomeComponent from "./components/home/HomeComponent";

class App extends React.Component {
  // tslint:disable-next-line:member-access
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Link to="/sobre">Ir para a página sobre \o/</Link>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
