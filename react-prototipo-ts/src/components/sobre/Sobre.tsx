import * as React from "react";
import { Component } from "react";
import "../../App.css";
import logo from "./../../logo.svg";

class Sobre extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Página de Sobre</h1>
        </header>
        <p className="App-intro">Exemplo de Página Sobre :)</p>
      </div>
    );
  }
}
export default Sobre;
