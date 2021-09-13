import { useState, useRef } from "react";

const AccountsTable = (props) => {
  let accounts = [];
  // const hasUpdated = useRef(false)
  // const [updateAccounts,setUpdateAccounts] = useState([])
  console.log(accounts);
  for (let i = 0; i < localStorage.length; i++) {
    let account = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (!account.isAdmin) accounts.push(account);
  }

  const [allAccounts, setAllAccounts] = useState(accounts);

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    setAllAccounts([...accounts]);
  };

  return (
    <tbody>
      {allAccounts.map((account) => (
        <tr key={account.id}>
          <td>{account.name}</td>
          <td>{account.id}</td>
          <td>{account.balance}</td>
          <td>
            <i
              class="fa fa-trash"
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(account.id)}
              aria-hidden="true"
            ></i>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AccountsTable;
