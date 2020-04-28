import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false
    };
  }

  handleSelect = e => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value }
    });
  };

  handleChange = e => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value }
    });
  };
  render() {
    const { data } = this.state;

    return (
      <>
        <Navbar />
        <div className="container" style={{ marginTop: 100 }}>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-control-label bold">
                        Full Name
                      </label>
                      <input
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.name || ""}
                        name="fullName"
                        className="forms"
                        type="text"
                        id="name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city" className="form-control-label bold">
                        Phone
                      </label>
                      <input
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.city || ""}
                        name="phone"
                        className="forms"
                        type="phone"
                        id="city"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="bold">Born Date</label>
                          <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="date-box w-100"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            minDate={new Date()}
                            name="startDate"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label
                            htmlFor="bedroom"
                            className="form-control-label bold"
                          >
                            Bedroom
                          </label>
                          <input
                            required
                            autoComplete="off"
                            onChange={this.handleChange}
                            value={data.bedroom || ""}
                            name="bedroom"
                            className="forms"
                            type="number"
                            id="bedroom"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label
                            htmlFor="bathroom"
                            className="form-control-label bold"
                          >
                            Bathroom
                          </label>
                          <input
                            required
                            autoComplete="off"
                            onChange={this.handleChange}
                            value={data.bathroom || ""}
                            name="bathroom"
                            className="forms"
                            type="number"
                            id="bathroom"
                          />
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="form-group">
                          <label
                            htmlFor="area"
                            className="form-control-label bold"
                          >
                            Area (Ft)
                          </label>
                          <input
                            required
                            onChange={this.handleChange}
                            value={data.area || ""}
                            name="area"
                            autoComplete="off"
                            className="forms"
                            type="number"
                            id="area"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="typeRent"
                        className="form-control-label bold"
                      >
                        Type of Rent
                      </label>
                      <select
                        onChange={this.handleSelect}
                        defaultValue={"select"}
                        name="typeRent"
                        id="typeRent"
                        className="forms"
                      >
                        <option value="select" disabled>
                          Select Type
                        </option>
                        <option value="day">Day</option>
                        <option value="month">Month</option>
                        <option value="year">Year</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="address"
                        className="form-control-label bold"
                      >
                        Address
                      </label>
                      <input
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.address || ""}
                        name="address"
                        className="forms"
                        type="text"
                        id="address"
                      />
                    </div>

                    <div className="form-group">
                      <label className="bold">Born Date</label>
                      <DatePicker
                        dateFormat="dd/MM/yyyy"
                        className="date-box w-100"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        minDate={new Date()}
                        name="startDate"
                      />
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className="form-control-label bold"
                      >
                        Description
                      </label>
                      <textarea
                        required
                        autoComplete="off"
                        onChange={this.handleChange}
                        value={data.description || ""}
                        name="description"
                        id="description"
                        className="textareas"
                      />
                    </div>

                    <div className="mt-3 float-right d-flex">
                      <Link to="/profile">
                        <button type="button" className="btn btn-danger mr-3">
                          Cancel
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={this.state.loading}
                      >
                        {this.state.loading && (
                          <div className="btn-loader"></div>
                        )}
                        {!this.state.loading && <span>Save</span>}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddProperty;
