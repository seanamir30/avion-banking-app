import { useState,useRef } from "react";


const AccountsTable = () => {
    
    let accounts = []
    // const hasUpdated = useRef(false)
    // const [updateAccounts,setUpdateAccounts] = useState([])

    for (let i = 0; i < localStorage.length; i++) {
        let account = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (!account.isAdmin) accounts.push(account);
    }

    // if(!hasUpdated.current){
    //     setUpdateAccounts(accounts)
    //     hasUpdated.current = true;
    // }
    const handleDelete = (key) => {
        localStorage.removeItem(key);
        window.location.reload();
    };

    return (
        <tbody>
            {accounts.map((account) => (
                <tr id={account.id}>
                    <td>{account.name}</td>
                    <td>{account.id}</td>
                    <td>{account.balance}</td>
                    <td><i class="fa fa-trash" style={{cursor:"pointer"}} onClick={() => handleDelete(account.id)} aria-hidden="true"></i></td>
                </tr>
            ))}
        </tbody>
    )
}

export default AccountsTable
