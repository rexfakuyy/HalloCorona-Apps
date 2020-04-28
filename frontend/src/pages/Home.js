import React, { Component } from "react";
import Articles from "../components/Articles";
import Navbar from "../components/Navbar";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2>Artikel Hari Ini</h2>
          </div>
          <Articles />
        </div>
      </>
    );
  }
}

export default Home;
