import React from "react";
import { useState } from "react";
import TransactionAlert from "./TransactionAlert";

const Deposit = () => {
  const [alert, setAlert] = useState("");
  const [animationDelay, setAnimationDelay] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [severity, setSeverity] = useState(0);

  
  let account = JSON.parse(localStorage.getItem(accountNumber));

  const saveToTransactionHistory = () => {
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth()+1;
    let dateToBeSaved = `${month}/${date}`;
    let transactions = account.transactions;
    transactions.push({
      title: "Deposit",
      date: dateToBeSaved,
      amount: `+${amount}`,
    });
    localStorage.setItem(account.id, JSON.stringify(account));
  };

  const alertHandler = () => {
    let message = ''
    if(severity === 'error'){
      !account ? message = "The account number you have entered is invalid" : account.balance > amount || amount === 0 ?  message = "Please enter a valid amount"  : message = "Sorry, you got insufficient funds for your request"
    }
    else{message="You have withdrawn successfully!"}
    setTimeout(()=>{setAnimationDelay(false); setTimeout(()=>{setAlert(false)},500)},5000)
    return <TransactionAlert aDelay={animationDelay} sAnimationDelay={setAnimationDelay} sAlert={setAlert} message={message} severity={severity}/>
  }

  const handleDeposit = () => {
    if (account !== null && amount !== 0){
      account.balance = parseFloat(account.balance) + parseFloat(amount);
      localStorage.setItem(accountNumber, JSON.stringify(account));
      saveToTransactionHistory();
      setAccountNumber('')
      setAmount('')
      window.location.reload();
    }
    else{
      setSeverity("error")
    }
    setAlert(true);
    setAnimationDelay(true);
  };
  return (
    <>
    {alert ? alertHandler() : <></>}
    <div
      className="modal fade"
      id="depositModal"
      tabindex="-1"
      aria-labelledby="depositModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="depositModalLabel">
              DEPOSIT
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="col-xl p-2">
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
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={handleDeposit}
              className="btn btn-danger"
            >
              DEPOSIT
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Deposit;
