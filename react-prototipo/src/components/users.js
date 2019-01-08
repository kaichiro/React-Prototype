import React from "react";
// import { Link, Route } from "react-router-dom";

// const User = ({ match }) => <p>{match.params.id}</p>;

class Users extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default Users;
