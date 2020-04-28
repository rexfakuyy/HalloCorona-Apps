import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";

class Header extends Component {
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <Jumbotron>
          <div className="container py-5">
            <h2>Cegah Covid-19</h2>
            <h3>dengan melakukan:</h3>
            <p>
              <Link to="/reservation">
                <button className="btn btn-primary">
                  Konsultasi Dengan Dokter
                </button>
              </Link>
            </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
