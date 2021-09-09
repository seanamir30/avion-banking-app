import React from "react";
import { useState } from "react";

const Deposit = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {

    let account = JSON.parse(localStorage.getItem(accountNumber));
    account.balance = parseFloat(account.balance) + parseFloat(amount);
    localStorage.setItem(accountNumber, JSON.stringify(account));
    window.location.reload();
  };
  return (
    <div className="col-xl p-2">
      <form className="card p-4">
        <h2>Deposit</h2>
        <div className="mb-3">
          <label className="form-label">Account Name</label>
          <input
            className="form-control"
            type="text"
            placeholder=" Enter Name Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Account Number</label>
          <input
            className="form-control"
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            className="form-control"
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Amount Here"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleDeposit}
          className="btn btn-success"
        >
          Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
