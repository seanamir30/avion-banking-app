import React, { Component } from "react";
import { useState } from "react";

const ClientDeposit = (props) => {
  const [amount, setAmount] = useState(0);

  const saveToTransactionHistory = () => {
    let account = JSON.parse(localStorage.getItem(props.accountNumber));
    let d = new Date()
    let date = d.getDate()
    let month = d.getMonth()
    let dateToBeSaved = `${date}/${month}`
    let transactions = account.transactions
    transactions.push({
      'title': 'Deposit',
      'date' : dateToBeSaved,
      'amount' : `+${amount}`
    })
    localStorage.setItem(account.id,JSON.stringify(account))

  }

  const handleDeposit = () => {
    let account = JSON.parse(localStorage.getItem(props.accountNumber));
    account.balance = parseFloat(account.balance) + parseFloat(amount);
    localStorage.setItem(props.accountNumber, JSON.stringify(account));
    !props.refreshCheck ? props.refresher(true) : props.refresher(false);
    saveToTransactionHistory();
  };
  return (
    <div
      className="modal fade"
      id="clientDepositModal"
      tabindex="-1"
      aria-labelledby="clientDepositModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
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
            <button className="btn btn-primary" onClick={handleDeposit}  data-bs-dismiss="modal">
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDeposit;
