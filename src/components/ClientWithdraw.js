import React from "react";
import { useState } from "react";

const ClientWithdraw = (props) => {
  const [amount, setAmount] = useState(0);

  const handleWithdraw = () => {
    let account = JSON.parse(localStorage.getItem(props.accountNumber));
    account.balance = parseFloat(account.balance) - parseFloat(amount);
    localStorage.setItem(props.accountNumber, JSON.stringify(account));
    window.location.reload();
  };

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
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button onClick={handleWithdraw} className="btn btn-primary">
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientWithdraw;
