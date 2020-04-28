import React, { Component } from "react";
import { Modal, Button} from "react-bootstrap";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    const { data: orderData, loading, error } = this.props.detail;

    if (error) return <>Error</>;
    if (loading)
      return (
        <>
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        </>
      );
 
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dispatch="true"
      >
        {orderData && orderData.house && (
          <div className="pt-3 p-2 mb-3">
            <div className="px-3">
              <table className="table table-striped table-bordered table-sm">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>User</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{orderData.user.fullName}</td>
                    <td>{orderData.user.gender}</td>
                    <td>{orderData.user.phone}</td>
                    <td>
                      Long time rent :
                      <b className="text-danger float-right">
                        1 {orderData.house.typeRent}
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      Total :
                      <b className="text-danger float-right">
                        {orderData.total}
                      </b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="form-group">
                <label
                  htmlFor="description"
                  className="form-control-label bold"
                >
                  Give Response
                </label>
                <textarea
                  required
                  autoComplete="off"
                  onChange={this.handleChange}
                  value=""
                  name="description"
                  id="description"
                  className="textareas"
                />
              </div>
              <div className="float-right d-flex">
                <Button
                  variant="danger"
                  className="mr-2 btn-sm bold"
                  onClick={this.props.onHide}
                >
                  Cancel
                </Button>
                <Button
                  variant="success"
                  className="bold"
                  onClick={this.props.onHide}
                >
                  Approve
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.detailOrder
  };
};

export default connect(mapStateToProps)(Detail);
