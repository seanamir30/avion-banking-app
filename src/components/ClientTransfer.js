import React from "react";

const ClientTransfer = (props) => {
  return (
    <div
      className="modal fade"
      id="clientTransferModal"
      tabindex="-1"
      aria-labelledby="clientTransferModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="clientTransferModalLabel">
              Transfer
            </h5>
          </div>
          <div className="modal-body">
            <label htmlFor="receipient" className="form-label">
              Receipient
            </label>
            <input
              className="form-control"
              id="receipient"
              placeholder="Enter Acount Number Here"
            />

            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="Enter Amount Here"
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary">Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTransfer;
