import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Navbar from "../components/Navbar";

class AddArticle extends Component {
  state = {
    data: {}
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Navbar />
        <div className="container" style={{marginTop: 100}}>
          <Form>
            <div className="form-group">
              <label htmlFor="title" className="form-control-label bold">
                Title
              </label>
              <input
                required
                onChange={this.handleChange}
                value={data.title || ""}
                name="weight"
                autoComplete="off"
                className="forms"
                type="text"
                id="title"
              />
            </div>
            <button>Upload Image</button>
          </Form>
        </div>
      </>
    );
  }
}

export default  AddArticle;
