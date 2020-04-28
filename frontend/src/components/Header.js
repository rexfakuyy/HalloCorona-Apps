import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import konsul from "../assets/img/konsultasi.svg"

class Header extends Component {
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <Jumbotron>
          <div className="container py-5">
            <h1 className="text-white">Cegah Covid-19</h1>
            <h3 className="text-white">dengan melakukan:</h3>
            <p>
              <Link to="/reservation">
                <button className="btn btn-light" style={{color: '#ff6185'}}>
                  <img className="mr-3" alt=".." src={konsul}/>
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
