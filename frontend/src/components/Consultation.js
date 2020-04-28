import React, { Component } from "react";

class Consultation extends Component {
  render() {
    return (
      <div className="card p-3">
        <div className="d-flex align-items-top mb-3">
          <div className="mr-3">
            <img
              src="https://www.eastriseaviation.com/wp-content/uploads/2015/11/blank-profile-picture-200x200.png"
              alt="..."
              className="avatar"
              style={{ height: 60, width: 60, borderRadius: 45 }}
            />
          </div>
          <div className="d-flex w-100 justify-content-between align-content-top">
            <div>
              <h5 className="mb-0">Sakit kepala berlebih</h5>
              <small>16 April 2020</small>
              <br />
              <small>Keluhan: Dok saya ganteng</small>
            </div>
            <div>
              <small className="bold">17 April 2020</small>
            </div>
          </div>
        </div>
        <div className="border-top">
          <div className="text-center mt-3">
            <h5>Waiting For Reply</h5>
          </div>

          <div style={{marginLeft: 70}} className="d-flex align-items-center mt-3">
            <div className="mr-3">
              <img
                src="https://www.eastriseaviation.com/wp-content/uploads/2015/11/blank-profile-picture-200x200.png"
                alt="..."
                className="avatar"
                style={{ height: 60, width: 60, borderRadius: 45 }}
              />
            </div>
            <div>
              <div>
                <small>Keluhan: Dok saya ganteng</small>
                <br />
                <small>Dr Anto</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Consultation;