import React, { Component } from "react";

const Transfer = () => {
  return (
    <div className="col m-2 p-2">
      <form className="deposit-form p-4">
        <h2 className="font-weight-bold">Transfer</h2>
        <h3 className="m-0 pl-2">Sender</h3>
        <div class="form-group p-2 d-flex flex-column">
          <label>Account Name</label>
          <input type="text" placeholder=" Enter Name Here" />
        </div>
        <div class="form-group p-2 d-flex flex-column">
          <label>Account Number</label>
          <input
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
          />
        </div>
        <h3 className="m-0 pl-2">Receiver</h3>
        <div class="form-group p-2 d-flex flex-column">
          <label>Account Name</label>
          <input type="text" placeholder=" Enter Name Here" />
        </div>
        <div class="form-group p-2 d-flex flex-column">
          <label>Account Number</label>
          <input
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
          />
        </div>
        <div className="form-group p-2 d-flex flex-column">
          <h3>Amount</h3>
          <input
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Amount Here"
          />
        </div>
        <button type="button" class="btn btn-success">
          Transfer
        </button>
      </form>
    </div>
  );
};

export default Transfer;
