import { useState, useRef } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const AccountsTable = (props) => {
  let accounts = [];
  // const hasUpdated = useRef(false)
  // const [updateAccounts,setUpdateAccounts] = useState([])

  const [allAccountsChecked, setAllAccountsChecked] = useState(false);
  const [allAccounts, setAllAccounts] = useState(accounts);

  if (!allAccountsChecked) {
    for (let i = 0; i < localStorage.length; i++) {
      let account = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (!account.isAdmin) accounts.push(account);
    }
    setAllAccountsChecked(true);
    setAllAccounts([...accounts]);
  }

  const updateTable = () => {
    setAllAccounts([...accounts]);
    setAllAccountsChecked(false);
    console.log("update");
  };

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    updateTable();
  };

  return (
    <tbody>
      {allAccounts
        .map((account) => (
          <tr key={account.id}>
            <td>{account.name}</td>
            <td>{account.id}</td>
            <td>{account.balance}</td>
            <td>
              <DeleteForeverIcon
                style={{ color: "#dc3545", cursor: "pointer" }}
                onClick={() => {
                  handleDelete(account.id);
                }}
              />
            </td>
          </tr>
        ))
        .reverse()}
    </tbody>
  );
};

export default AccountsTable;
