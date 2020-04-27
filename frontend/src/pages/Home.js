import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getUsers } from "../_actions/master";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="card m-2">
          <p>halow</p>
          <button className="btn btn-primary">hai</button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { order: state.detailOrder };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getUsers: (id, data) => dispatch(getUsers(id, data))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;