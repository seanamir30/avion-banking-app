const Withdraw = () => {
  return (
    <div className="col m-2 p-2">
      <form className="deposit-form p-4">
        <h2>Withdraw</h2>
        <div class="form-group p-2 d-flex flex-column">
          <label>Account Name</label>
          <input type="text" placeholder=" Enter Name Here" />
        </div>
        <div class="form-group p-2 d-flex flex-column">
          <label>Account Number</label>
          <input
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Account Number Here"
          />
        </div>
        <div className="form-group p-2 d-flex flex-column">
          <label>Amount</label>
          <input
            type="number"
            onWheel={(e) => e.target.blur()}
            placeholder=" Enter Amount Here"
          />
        </div>
        <button type="button" class="btn btn-success">
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
