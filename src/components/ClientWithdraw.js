import React from "react";

import { useState } from "react";

const ClientWithdraw = (props) => {
  const [amount, setAmount] = useState(0);

  const saveToTransactionHistory = () => {
    let account = JSON.parse(localStorage.getItem(props.accountNumber));
    let d = new Date()
    let date = d.getDate()
    let month = d.getMonth()
    let dateToBeSaved = `${date}/${month}`
    let transactions = account.transactions
    transactions.push({
      'title': 'Withdraw',
      'date' : dateToBeSaved,
      'amount' : `-${amount}`
    })
    localStorage.setItem(account.id,JSON.stringify(account))

  }

  const handleWithdraw = () => {
    let account = JSON.parse(localStorage.getItem(props.accountNumber));
    account.balance = parseFloat(account.balance) - parseFloat(amount);
    localStorage.setItem(props.accountNumber, JSON.stringify(account));
    console.log(props.refreshCheck)
    !props.refreshCheck ? props.refresher(true) : props.refresher(false);
    saveToTransactionHistory();
  };

  return (
    <div
      className="modal fade"
      id="clientWithdrawModal"
      tabindex="-1"
      aria-labelledby="clientWithdrawModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
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
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button onClick={handleWithdraw} className="btn btn-primary" data-bs-dismiss="modal">
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientWithdraw;
