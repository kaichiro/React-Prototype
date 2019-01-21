import React, { Component } from "react";
import { MyContext } from "./MyProvider";

class SettingsScreen extends Component {
  state = { title: "" };

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { title } = this.state;
    return (
      <MyContext.Consumer>
        {({ setTitle }) => (
          <div>
            <input type="text" value={title} />
            <button
              onClick={() => {
                setTitle(title);
              }}
            >
              Update Title
            </button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default SettingsScreen;
