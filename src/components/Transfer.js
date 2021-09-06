const Transfer = () => {
  return (
    <div className="col-xl p-2">
      <form className="card p-4">
        <h2 className="font-weight-bold">Transfer</h2>
        <h3 className="m-0 pl-2">Sender</h3>
        <div className="mb-3">
          <label className="form-label">Account Name</label>
          <input className="form-control" type="text" placeholder=" Enter Name Here" />
        </div>
        <div className="mb-3">
          <label className="form-label">Account Number</label>
          <input
            className="form-control" 
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
          />
        </div>
        <h3 className="m-0 pl-2">Receiver</h3>
        <div className="mb-3">
          <label className="form-label">Account Name</label>
          <input type="text" className="form-control" placeholder=" Enter Name Here" />
        </div>
        <div className="mb-3">
          <label className="form-label">Account Number</label>
          <input
            className="form-control" 
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
          />
        </div>
        <div className="mb-3">
          <h3>Amount</h3>
          <input
            className="form-control" 
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Amount Here"
          />
        </div>
        <button type="button" className="btn btn-success">
          Transfer
        </button>
      </form>
    </div>
  );
};

export default Transfer;
