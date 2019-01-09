import React from "react";

import FormClientComponent from "./semantic/FormClientComponent";

class Users extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <FormClientComponent />
      </div>
    );
  }
}

export default Users;
