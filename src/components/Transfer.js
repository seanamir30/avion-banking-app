import React from "react";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import { Fade } from "@material-ui/core";

const Transfer = () => {
  const [alert, setAlert] = useState("");
  const [animationDelay, setAnimationDelay] = useState("");

  const [senderAccountNumber, setSenderAccountNumber] = useState("");
  const [receiverAccountNumber, setReceiverAccountNumber] = useState("");

  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");

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

  const handleDisplayName = () => {
    let senderAccount = JSON.parse(localStorage.getItem(senderAccountNumber));
    let receiverAccount = JSON.parse(
      localStorage.getItem(receiverAccountNumber)
    );

    setReceiverName(receiverAccount.name);
    setSenderName(senderAccount.name);
  };
  return (
    <div>
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
                <h3 className="mt-4 mb-0 pt-2 pl-2 border-top">Receipient</h3>
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
                <div className="mb-3 pt-2 mt-4 border-top">
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
                className="btn btn-danger"
                data-bs-target="#confirmTransferModal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
                onClick={handleDisplayName}
              >
                TRANSFER
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="confirmTransferModal"
        tabindex="-1"
        aria-labelledby="confirmTransferModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmTransferModalLabel">
                Transaction Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h3 className="m-0 pl-2">Sender</h3>
              <p className="lbl-1 mb-0">
                Account Name: <span className="lbl-2"> {senderName}</span>
              </p>
              <p className="lbl-1">
                Account Number:
                <span className="lbl-2"> {senderAccountNumber}</span>
              </p>

              <h3 className="m-0 pl-2 pt-2 border-top">Receipient</h3>
              <p className="lbl-1 mb-0">
                Account Name: <span className="lbl-2">{receiverName}</span>
              </p>
              <p className="lbl-1">
                Account Number:
                <span className="lbl-2"> {receiverAccountNumber}</span>
              </p>

              <p className="lbl-1 border-top pt-3 mb-0">
                Transfer Amount: <span className="lbl-2">&#x20B1;{amount}</span>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleTransfer}
              >
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
