import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    const { newValue } = this.props;
    return (
      <div className="App" style={{ paddingTop: "10px" }}>
        <input type="text" />
        <button>Click me!</button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps)(App);

// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App" style={{ paddingTop: "10px" }}>
//         <input type="text" />
//         <button>Click me!</button>
//         <h1>teste</h1>
//       </div>
//     );
//   }
// }

// export default App;
