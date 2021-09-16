import AddAccountModal from "./AddAccountModal";
import AdminTransaction from "./AdminTransaction";
import AccountsTable from "./AccountsTable";
import Withdraw from "./Withdraw";
import Transfer from "./Transfer";
import Deposit from "./Deposit";
import { LocalAtm, Sync, AccountBalance } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";

const Accounts = () => {
  return (
    <div className="container mt-3">
      <AddAccountModal />
      <h2 className="text-center display-5">All Accounts</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Account Number</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <AccountsTable />
      </table>
      <Withdraw />
      <Transfer />

      <div className="d-flex flex-column align-items-center">
        <div className="btn-group" role="group" aria-label="Nav">
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#depositModal"
          >
            <AccountBalance />
            <br />
            Deposit
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#transferModal"
          >
            <Sync />
            <br />
            Transfer
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#withdrawModal"
          >
            <LocalAtm />
            <br />
            Withdraw
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#AddAccountModal"
          >
            <AddIcon />
            <br />
            Add Account
          </button>
        </div>
      </div>
      <Deposit />
    </div>
  );
};

export default Accounts;
