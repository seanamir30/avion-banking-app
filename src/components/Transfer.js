import React from "react";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import { Fade } from "@material-ui/core";

const Transfer = () => {
  const [alert, setAlert] = useState("");
  const [animationDelay, setAnimationDelay] = useState("");
  const [senderAccountNumber, setSenderAccountNumber] = useState("");
  const [receiverAccountNumber, setReceiverAccountNumber] = useState("");

  const [amount, setAmount] = useState(0);

  const saveToTransactionHistory = () => {
    let senderAccount = JSON.parse(localStorage.getItem(senderAccountNumber));
    let receiverAccount = JSON.parse(
      localStorage.getItem(receiverAccountNumber)
    );
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let dateToBeSaved = `${date}/${month}`;
    let transactions = senderAccount.transactions;
    transactions.push({
      title: "Transfer",
      date: dateToBeSaved,
      amount: `-${amount}`,
    });
    localStorage.setItem(senderAccount.id, JSON.stringify(senderAccount));
    transactions = receiverAccount.transactions;
    transactions.push({
      title: "Transfer",
      date: dateToBeSaved,
      amount: `+${amount}`,
    });
    localStorage.setItem(receiverAccount.id, JSON.stringify(receiverAccount));
  };

  const handleTransfer = () => {
    let senderAccount = JSON.parse(localStorage.getItem(senderAccountNumber));
    let receiverAccount = JSON.parse(
      localStorage.getItem(receiverAccountNumber)
    );
    if (senderAccount.balance > amount) {
      senderAccount.balance =
        parseFloat(senderAccount.balance) - parseFloat(amount);
      receiverAccount.balance =
        parseFloat(receiverAccount.balance) + parseFloat(amount);

      localStorage.setItem(senderAccountNumber, JSON.stringify(senderAccount));
      localStorage.setItem(
        receiverAccountNumber,
        JSON.stringify(receiverAccount)
      );

      saveToTransactionHistory();
      window.location.reload();
    } else {
      setAlert(true);
      setAnimationDelay(true);
    }
  };

  return (
    <div
      className="modal fade"
      id="transferModal"
      tabindex="-1"
      aria-labelledby="transferModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content ">
          <div className="modal-header">
            <h5 className="modal-title" id="transferModalLabel">
              TRANSFER
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="col-xl p-2">
              {alert ? (
                <Fade in={animationDelay === true}>
                  <Alert
                    onClose={() => {
                      setAnimationDelay(false);
                      setTimeout(function () {
                        setAlert(false);
                      }, 500);
                    }}
                    variant="filled"
                    severity="error"
                    className="position-fixed bottom-0 start-50 translate-middle z-top mt-5"
                  >
                    Insufficient funds to transfer
                  </Alert>
                </Fade>
              ) : (
                <></>
              )}
              <h3 className="m-0 pl-2">Sender</h3>
              <div className="mb-3">
                <label className="form-label">Account Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Enter Name Here"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Account Number</label>
                <input
                  className="form-control"
                  type="text"
                  onWheel={(e) => e.target.blur()}
                  placeholder=" Enter Account Number Here"
                  value={senderAccountNumber}
                  onChange={(e) => setSenderAccountNumber(e.target.value)}
                />
              </div>
              <h3 className="m-0 pl-2">Receiver</h3>
              <div className="mb-3">
                <label className="form-label">Account Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" Enter Name Here"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Account Number</label>
                <input
                  className="form-control"
                  type="text"
                  onWheel={(e) => e.target.blur()}
                  placeholder=" Enter Account Number Here"
                  value={receiverAccountNumber}
                  onChange={(e) => setReceiverAccountNumber(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <h3>Amount</h3>
                <input
                  className="form-control"
                  type="number"
                  onWheel={(e) => e.target.blur()}
                  placeholder=" Enter Amount Here"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleTransfer}
            >
              TRANSFER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
