import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as action from "../redux/actions";

class SettingsScreen extends Component {
  state = { title: "" };

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { updateTitle } = this.props;
    const { title } = this.state;
    return (
      <div>
        <input type="text" value={title} />
        <button
          onClick={() => {
            updateTitle(title);
          }}
        >
          Update Title
        </button>
      </div>
    );
  }
}

SettingsScreen.propTypes = {
  updateTitle: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  updateTitle: dispatch(action.updateTitle)
});

export default connect(
  null,
  mapDispatchToProps
)(SettingsScreen);
