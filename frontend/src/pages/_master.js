import React, { Component } from "react";
import { connect } from "react-redux";
import { functions } from "../_actions/master";

class Page extends Component {
  render() {
    return <p>halow</p>;
  }
}

const mapStateToProps = state => {
  return { order: state.detailOrder };
};

const mapDispatchToProps = dispatch => {
  return {
    functions: (id, data) => dispatch(functions(id, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);