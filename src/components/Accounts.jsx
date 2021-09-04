import React, { Component } from "react";
import { useState } from "react";

const Accounts = () => {
  // const [accounts, setAccount] = useState([
  //   { id: 1, name: "Sample Name", balance: 9999 },
  //   { id: 2, name: "Your Name", balance: 8888 },
  //   { id: 3, name: "My Name", balance: 12345 },
  // ]);

  const accounts = [];
  for(let i=0; i<localStorage.length;i++){
    let account = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if(!account.isAdmin) accounts.push(account)
  }

  console.log(accounts)

  return (
    <React.Fragment>
      <h2 className="text-center">All Accounts</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Account Number</th>
            <th>Balance</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr>
              <td>{account.name}</td>
              <td>{account.id}</td>
              <td>{account.balance}</td>
              <td>
                <button className="btn btn-danger">Manage</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success">Add Account</button>
    </React.Fragment>
  );
};

export default Accounts;
