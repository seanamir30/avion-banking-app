import { useState } from "react";

const AddAccountModal = () => {



    // Saves a new user to local storage

    function addAccount() {
        let id = (Math.floor(Math.random() * 9000000000) + 1000000000).toString()
        localStorage.setItem(id, JSON.stringify({
            id: id,
            email: email,
            password: password,
            isAdmin: false,
            balance: balance,
            name: name,
            transactions:[]
        }))
    }
    //
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [balance, setBalance] = useState("");
    const [name, setName] = useState("");

    return (
        <div className="modal fade" tabIndex="-1" id="AddAccountModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Account</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={addAccount}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" type="text" placeholder="Name" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" placeholder="Email" id="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" placeholder="Password" id="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="initialBalance" className="form-label">Initial Balance</label>
                                <input value={balance} onChange={(e) => setBalance(e.target.value)} className="form-control" type="number" placeholder="Initial Balance" id="initialBalance" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-danger">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AddAccountModal
