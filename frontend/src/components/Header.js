import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import konsul from "../assets/img/konsultasi.svg";
import covid from "../assets/headerimg/covid.svg";
import mata from "../assets/headerimg/mata.svg";
import ramai from "../assets/headerimg/ramai.svg";
import rumah from "../assets/headerimg/rumah.svg";
import tangan from "../assets/headerimg/tangan.svg";

class Header extends Component {
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <Jumbotron>
          <div className="container py-5 d-flex align-items-top justify-content-between">
            <div>
              <div className="d-flex align-items-top">
                <img src={covid} className="covid" alt="..." />
                <div style={{ marginLeft: 70 }}>
                  <h1 className="text-white">Cegah Covid-19</h1>
                  <h3 className="text-white">dengan melakukan:</h3>
                </div>
              </div>
              <p className="mt-3" style={{ marginLeft: 0 }}>
                <Link to="/reservation">
                  <button
                    className="btn btn-light"
                    style={{ color: "#ff6185" }}
                  >
                    <img
                      style={{ height: 40 }}
                      className="mr-3"
                      alt=".."
                      src={konsul}
                    />
                    Konsultasi Dengan Dokter
                  </button>
                </Link>
              </p>
            </div>
            <div className="d-flex">
              <img src={ramai} alt="..." className="mr-4" />
              <img src={tangan} alt="..." className="mr-4" />
              <img src={mata} alt="..." className="mr-4" />
              <img src={rumah} alt="..." className="mr-4" />

            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
