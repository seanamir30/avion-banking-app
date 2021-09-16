import { useState, useRef } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const AccountsTable = ({updateTable,allAccounts}) => {


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
