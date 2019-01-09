import React, { Component } from "react";
import "./App.css";

import CardGroupComponent from "./components/semantic/CardGroupComponent";
import CarrinhoDeComprasComponent from "./components/CarrinhoDeComprasComponent";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <CardGroupComponent />
          <CarrinhoDeComprasComponent />
        </section>
      </div>
    );
  }
}

export default App;
