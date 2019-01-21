import React, { Component } from "react";

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    title: "First title"
  };

  setTitle = val => {
    this.setState({ title: val });
  };

  render() {
    return (
      <MyContext.Provider
        value={{ title: this.state.title, setTitle: this.setTitle }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
