import React, { Component } from "react";
import { useState } from "react";
import TransactionAlert from "./TransactionAlert";

const ClientDeposit = (props) => {
  const [amount, setAmount] = useState(0);
  const [alert, setAlert] = useState('');
  const [animationDelay, setAnimationDelay] = useState('');

  let account = JSON.parse(localStorage.getItem(props.accountNumber));
  const [severity,setSeverity] = useState('')

  const saveToTransactionHistory = () => {
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

  const alertHandler = () => {
    let errorMessage = ''
    if(severity === "error"){
      errorMessage = "Please enter a valid amount";
    }
    else{ errorMessage = "Your funds have been deposited!" }
    setTimeout(()=>{setAnimationDelay(false); setTimeout(()=>{setAlert(false)},500)},5000)
    return <TransactionAlert aDelay={animationDelay} sAnimationDelay={setAnimationDelay} sAlert={setAlert} message={errorMessage} severity={severity}/>
  }

  const handleDeposit = () => {
    if(amount > 0){
    account.balance = parseFloat(account.balance) + parseFloat(amount);
    localStorage.setItem(props.accountNumber, JSON.stringify(account));
    !props.refreshCheck ? props.refresher(true) : props.refresher(false);
    saveToTransactionHistory();
    setSeverity("success")
    }
    else {
      setSeverity("error")
      
    }
    setAlert(true)
    setAnimationDelay(true)
  };
  return (
    <>
    {alert ? alertHandler() : <></>}
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
    </>
  );
};

export default ClientDeposit;
