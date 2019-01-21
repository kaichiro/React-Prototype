import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class TitleScreen extends Component {
  state = {};
  render() {
    const { title } = this.props;
    return (
      <div>
        This is Title container
        <span>{title}</span>
      </div>
    );
  }
}

TitleScreen.propTypes = {
  title: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  title: state.titleScreen.title
});

export default connect(mapStateToProps)(TitleScreen);
