import React from "react";
import Deposit from "./Deposit";
import Transfer from "./Transfer";
import Withdraw from "./Withdraw";

const AdminTransaction = () => {
  return (
    <div className="container">
      <div className="row align-items-center admin-transaction">
        <Withdraw />
        <Deposit />
        <Transfer />
      </div>
    </div>
  );
};

export default AdminTransaction;
