import React from "react";

import { useState } from "react";
import Alert from '@material-ui/lab/Alert';
import { Fade } from '@material-ui/core';
import TransactionAlert from "./TransactionAlert";

const ClientWithdraw = (props) => {
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
      'title': 'Withdraw',
      'date': dateToBeSaved,
      'amount': `-${amount}`
    })
    localStorage.setItem(account.id, JSON.stringify(account))
  }

  const alertHandler = () => {
    let message = ''
    if(severity === 'error'){
      account.balance > amount ?  message = "Please enter a valid amount"  : message = "Sorry, you got insufficient funds for your request"
    }
    else{message="You have withdrawn successfully!"}
    setTimeout(()=>{setAnimationDelay(false); setTimeout(()=>{setAlert(false)},500)},5000)
    return <TransactionAlert aDelay={animationDelay} sAnimationDelay={setAnimationDelay} sAlert={setAlert} message={message} severity={severity}/>
  }

  const handleWithdraw = () => {
    if (account.balance > amount && amount > 0) {
      account.balance = parseFloat(account.balance) - parseFloat(amount)
      localStorage.setItem(props.accountNumber, JSON.stringify(account));
      !props.refreshCheck ? props.refresher(true) : props.refresher(false);
      console.log(props.refreshCheck)
      setSeverity('success')
      saveToTransactionHistory();
    }
    else{
      setSeverity('error')
      
    }
    setAlert(true)
    setAnimationDelay(true)
  };

  return (
    <>
      {alert ? alertHandler() : <></>}
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
    </>
  );
};

export default ClientWithdraw;
