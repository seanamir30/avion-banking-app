import React, { Component } from "react";
class Accounts extends Component {
  state = {
    accounts: [
      { id: 1, name: "Sample Name", balance: 9999 },
      { id: 2, name: "Your Name", balance: 8888 },
      { id: 3, name: "My Name", balance: 12345 },
    ],
  };

  render() {
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
            {this.state.accounts.map((account) => (
              <tr key={account.id}>
                <td>{account.name}</td>
                <td>{account.id}</td>
                <td>{account.balance}</td>
                <td>
                  <button class="btn btn-danger">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button class="btn btn-success">Add Account</button>
      </React.Fragment>
    );
  }
}

export default Accounts;
