import { useState } from "react";
import Alert from '@material-ui/lab/Alert';
import { Fade } from '@material-ui/core';

const Withdraw = () => {
  const [alert, setAlert] = useState('');
  const [animationDelay, setAnimationDelay] = useState('');


  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);

  const handleWithdraw = () => {
    let account = JSON.parse(localStorage.getItem(accountNumber));
    console.log(account.balance > amount)
    if(account.balance > amount){
      account.balance -= amount;
      localStorage.setItem(accountNumber, JSON.stringify(account));
      window.location.reload();
    } else {
      setAlert(true)
      setAnimationDelay(true)
    }
  };

  return (
    <div className="col-xl p-2">
    {alert ? <Fade in={animationDelay===true}><Alert onClose={() => {setAnimationDelay(false);setTimeout(function(){setAlert(false)},500)}} variant="filled" severity="error" className="position-fixed bottom-0 start-50 translate-middle z-top mt-5">
        Insufficient funds to withdraw
    </Alert></Fade> : <></>}
      <form className="card p-4">
        <h2>Withdraw</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Account Name
          </label>
          <input
            id="name"
            className="form-control"
            type="text"
            placeholder=" Enter Name Here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="accountNumber" className="form-label">
            Account Number
          </label>
          <input
            className="form-control"
            id="accountNumber"
            type="text"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            className="form-control"
            id="amount"
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
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
