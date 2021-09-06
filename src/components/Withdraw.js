const Withdraw = () => {
  return (
    <div className="col-xl p-2">
      <form className="card p-4">
        <h2>Withdraw</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Account Name</label>
          <input id="name" className="form-control" type="text" placeholder=" Enter Name Here" />
        </div>
        <div className="mb-3">
          <label htmlFor="accountNumber" className="form-label">Account Number</label>
          <input
            className="form-control"
            id="accountNumber"
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            className="form-control"
            id="amount"
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Amount Here"
          />
        </div>
        <button type="button" className="btn btn-success">
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
