import { useState } from "react"


const TransactionHistory = ({ id }) => {
    let user = JSON.parse(localStorage.getItem(id))
    return (
        <div className="container transactions overflow-auto mt-3">
            {user.transactions.length===0 ? <div className="d-flex justify-content-center align-items-center h-100">You got no transactions yet!</div> : user.transactions.map((transaction) => (
                <div className="row border-bottom p-2">
                    <div className="col">
                        <strong>{transaction.title}</strong><br/>
                        <small className="text-muted">{transaction.date}</small>
                    </div>
                    <div className="col text-end">
                        {transaction.amount}
                    </div>
                </div>
            )).reverse()}
        </div>
    )
}

export default TransactionHistory