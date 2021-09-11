import React from "react";

const ClientWithdraw = () => {
  return (
    <div
      className="modal fade"
      id="clientWithdrawModal"
      tabindex="-1"
      aria-labelledby="clientWithdrawModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="clientWithdrawModalLabel">
              Withdraw
            </h5>
          </div>
          <div className="modal-body">
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

export default ClientWithdraw;
