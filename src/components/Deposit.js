import React from "react";

const Deposit = () => {
  return (
    <div className="col-xl p-2">
      <form className="card p-4">
        <h2>Deposit</h2>
        <div className="mb-3">
          <label className="form-label">Account Name</label>
          <input className="form-control" type="text" placeholder=" Enter Name Here" />
        </div>
        <div className="mb-3">
          <label className="form-label">Account Number</label>
          <input className="form-control"
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input className="form-control"
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Amount Here"
          />
        </div>
        <button type="button" className="btn btn-success">
          Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
