import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="hallo-corona--1">
        <div className="inner-wrapper mt-auto mb-auto container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="welcome-heading display-4 text-white">
                Product Development
              </h1>
              <p className="text-white">
                We can help you take your idea from concept to shipping using
                the latest technologies and best practices available.
              </p>
              <a
                href="#our-services"
                className="btn btn-lg btn-outline-white btn-pill align-self-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
