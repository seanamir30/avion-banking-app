
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";
import ClientDeposit from "./ClientDeposit";
import ClientWithdraw from "./ClientWithdraw";
import ClientTransfer from "./ClientTransfer";
import TransactionHistory from "./TransactionHistory";
import Menu from "./Menu";
import { LocalAtm,Sync,AccountBalance } from '@material-ui/icons'

function HomePage() {
  const passedState = useLocation();
  const { state } = passedState;
  const user = state.verify;
  console.log(user);

  return (
    <div className="container vh-100">
      {/* modals */}
      <ClientWithdraw
        key={user.id}
        balance={user.balance}
        accountNumber={user.id}
      />

      <ClientDeposit
        key={user.id}
        balance={user.balance}
        accountNumber={user.id}
      />

      <ClientTransfer
        key={user.id}
        balance={user.balance}
        accountNumber={user.id}
      />




      <div className="d-flex flex-column align-items-center">
        <Menu />
        <Card id={user.id} />
        <i className="fas fa-chart-line align-self-end m-2"></i>
        <div className="btn-group" role="group" aria-label="Nav">
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#clientDepositModal"
          >
            <AccountBalance/><br/>
            Deposit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#clientTransferModal"
          >
            <Sync/><br/>
            Transfer
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#clientWithdrawModal"
          >
            <LocalAtm/><br/>
            Withdraw
          </button>
        </div>
        <TransactionHistory id={user.id}/>
    </div>
    </div>
  );
}

export default HomePage;
