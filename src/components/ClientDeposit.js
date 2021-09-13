import React, { Component } from "react";
import { useState } from "react";

const ClientDeposit = (props) => {
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    let account = JSON.parse(localStorage.getItem(props.accountNumber));
    account.balance = parseFloat(account.balance) + parseFloat(amount);
    localStorage.setItem(props.accountNumber, JSON.stringify(account));
    window.location.reload();
  };
  return (
    <div
      className="modal fade"
      id="clientDepositModal"
      tabindex="-1"
      aria-labelledby="clientDepositModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="clientDepositModalLabel">
              Deposit
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
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleDeposit}>
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDeposit;
