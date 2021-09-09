import React from "react";
import { useState } from "react";

const Transfer = () => {
  const [senderAccountNumber, setSenderAccountNumber] = useState("");
  const [receiverAccountNumber, setReceiverAccountNumber] = useState("");

  const [amount, setAmount] = useState(0);

  const handleTransfer = () => {
    let senderAccount = JSON.parse(localStorage.getItem(senderAccountNumber));
    let receiverAccount = JSON.parse(
      localStorage.getItem(receiverAccountNumber)
    );
    senderAccount.balance =
      parseFloat(senderAccount.balance) - parseFloat(amount);
    receiverAccount.balance =
      parseFloat(receiverAccount.balance) + parseFloat(amount);

    localStorage.setItem(senderAccountNumber, JSON.stringify(senderAccount));
    localStorage.setItem(
      receiverAccountNumber,
      JSON.stringify(receiverAccount)
    );
    window.location.reload();
  };

  return (
    <div className="col-xl p-2">
      <form className="card p-4">
        <h2 className="font-weight-bold">Transfer</h2>
        <h3 className="m-0 pl-2">Sender</h3>
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
            type="text"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
            value={senderAccountNumber}
            onChange={(e) => setSenderAccountNumber(e.target.value)}
          />
        </div>
        <h3 className="m-0 pl-2">Receiver</h3>
        <div className="mb-3">
          <label className="form-label">Account Name</label>
          <input
            type="text"
            className="form-control"
            placeholder=" Enter Name Here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Account Number</label>
          <input
            className="form-control"
            type="text"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
            value={receiverAccountNumber}
            onChange={(e) => setReceiverAccountNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <h3>Amount</h3>
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
          className="btn btn-success"
          onClick={handleTransfer}
        >
          Transfer
        </button>
      </form>
    </div>
  );
};

export default Transfer;
