import React from "react";
import { useState } from "react";

const ClientTransfer = (props) => {
  const [amount, setAmount] = useState(0);
  const [receipientAccountNumber, setReceipientAccountNumber] = useState("");

  const handleTransfer = () => {
    let senderAccount = JSON.parse(localStorage.getItem(props.accountNumber));
    let receiverAccount = JSON.parse(
      localStorage.getItem(receipientAccountNumber)
    );
    senderAccount.balance =
      parseFloat(senderAccount.balance) - parseFloat(amount);
    receiverAccount.balance =
      parseFloat(receiverAccount.balance) + parseFloat(amount);

    localStorage.setItem(props.accountNumber, JSON.stringify(senderAccount));
    localStorage.setItem(
      receipientAccountNumber,
      JSON.stringify(receiverAccount)
    );
    saveToTransactionHistory()
    window.location.reload();
  };

  const saveToTransactionHistory = () => {
    let senderAccount = JSON.parse(localStorage.getItem(props.accountNumber));
    let receiverAccount = JSON.parse(localStorage.getItem(receipientAccountNumber));
    let d = new Date()
    let date = d.getDate()
    let month = d.getMonth()
    let dateToBeSaved = `${date}/${month}`
    let transactions = senderAccount.transactions
    transactions.push({
      'title': 'Transfer',
      'date' : dateToBeSaved,
      'amount' : `-${amount}`
    })
    localStorage.setItem(senderAccount.id,JSON.stringify(senderAccount))
    transactions = receiverAccount.transactions
    transactions.push({
      'title': 'Transfer',
      'date' : dateToBeSaved,
      'amount' : `+${amount}`
    })
    localStorage.setItem(receiverAccount.id,JSON.stringify(receiverAccount))
  }

  return (
    <div
      className="modal fade"
      id="clientTransferModal"
      tabindex="-1"
      aria-labelledby="clientTransferModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
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
              value={receipientAccountNumber}
              onChange={(e) => setReceipientAccountNumber(e.target.value)}
            />

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
            <button onClick={handleTransfer} className="btn btn-primary">
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTransfer;
