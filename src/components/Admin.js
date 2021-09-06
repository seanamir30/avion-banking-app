import { useHistory } from "react-router-dom";
import AddAccountModal from "./AddAccountModal";

const Accounts = () => {
  // const [accounts, setAccount] = useState([
  //   { id: 1, name: "Sample Name", balance: 9999 },
  //   { id: 2, name: "Your Name", balance: 8888 },
  //   { id: 3, name: "My Name", balance: 12345 },
  // ]);

  let history = useHistory();

  const accounts = [];
  for (let i = 0; i < localStorage.length; i++) {
    let account = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (!account.isAdmin) accounts.push(account);
  }

  console.log(accounts);

  const handleTransaction = () => {
    history.push({ pathname: "/manage-transaction" });
  };

  return (
    <div className="container mt-3">
      <AddAccountModal />
      <h2 className="text-center">All Accounts</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Account Number</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr>
              <td>{account.name}</td>
              <td>{account.id}</td>
              <td>{account.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#AddAccountModal">Add Account</button>
      <button className="btn btn-danger m-2">Manage Accounts</button>
      <button type="button" onClick={handleTransaction} className="btn btn-warning">
        Make Transactions
      </button>
    </div>
  );
};

export default Accounts;
