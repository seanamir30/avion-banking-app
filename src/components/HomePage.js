
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Card from "./Card";
import ClientDeposit from "./ClientDeposit";
import ClientWithdraw from "./ClientWithdraw";
import ClientTransfer from "./ClientTransfer";
import TransactionHistory from "./TransactionHistory";
import Graph from "./Graph";
import { LocalAtm, Sync, AccountBalance, Timeline, Casino } from '@material-ui/icons'

function HomePage() {
  const passedState = useLocation();
  const [graphModal,setGraphModal] = useState('')
  const { state } = passedState;
  const user = state.verify;
  console.log(user);

  const [refresh, setRefresh] = useState(false)

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




      <div className="d-flex flex-column align-items-center">
        <Card id={user.id} />
        <Graph open={graphModal} setOpen={setGraphModal} id={user.id} />

        <div className="btn-group" role="group" aria-label="Nav">
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#clientDepositModal"
          >
            <AccountBalance /><br />
            Deposit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#clientTransferModal"
          >
            <Sync /><br />
            Transfer
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#clientWithdrawModal"
          >
            <LocalAtm /><br />
            Withdraw
          </button>
        </div>
        <div class="btn-group mt-2" role="group">
          <button type="button" class="btn btn-outline-danger"><Casino/><br/>Gamble</button>
          <button type="button" class="btn btn-outline-danger" onClick={()=>setGraphModal(true)}><Timeline/><br/>Graph</button>
        </div>
        <TransactionHistory id={user.id} />
      </div>
    </div>
  );
}

export default HomePage;
