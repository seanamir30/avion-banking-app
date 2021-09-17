import { useLocation } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";
import ClientDeposit from "./ClientDeposit";
import ClientWithdraw from "./ClientWithdraw";
import ClientTransfer from "./ClientTransfer";
import TransactionHistory from "./TransactionHistory";
import Menu from "./Menu";
import Graph from "./Graph";
import { LocalAtm, Sync, AccountBalance } from "@material-ui/icons";
import GambleModal from "./GambleModal";

function HomePage() {
  const passedState = useLocation();
  const { state } = passedState;
  const user = state.verify;
  console.log(user);

  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container vh-100">
      {/* modals */}
      <ClientWithdraw
        refreshCheck={refresh}
        refresher={setRefresh}
        key={user.id}
        balance={user.balance}
        accountNumber={user.id}
      />

      <ClientDeposit
        refreshCheck={refresh}
        refresher={setRefresh}
        key={user.id}
        balance={user.balance}
        accountNumber={user.id}
      />

      <ClientTransfer
        refreshCheck={refresh}
        refresher={setRefresh}
        key={user.id}
        balance={user.balance}
        accountNumber={user.id}
      />

      <GambleModal />

      <div className="d-flex flex-column align-items-center">
        <Menu />
        <Card id={user.id} />
        <Graph id={user.id} />

        <div className="btn-group" role="group" aria-label="Nav">
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#clientDepositModal"
          >
            <AccountBalance />
            <br />
            Deposit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#clientTransferModal"
          >
            <Sync />
            <br />
            Transfer
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#clientWithdrawModal"
            data-bs-dismiss="modal"
          >
            <LocalAtm />
            <br />
            Withdraw
          </button>
        </div>

        <div className="btn-group mt-4" role="group" aria-label="Nav">
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#gamble"
            style={{ lineHeight: "15px" }}
          >
            <span style={{ fontSize: "2.5rem" }}>&#x2660;</span>
            <br />
            Gamble
          </button>
        </div>
        <TransactionHistory id={user.id} />
      </div>
    </div>
  );
}

export default HomePage;
