import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Card from './Card';
import TransactionHistory from './TransactionHistory';
import { LocalAtm,Sync,AccountBalance } from '@material-ui/icons'

function HomePage() {
    const passedState = useLocation();
    const { state } = passedState;
    const user = state.verify.id;
    return (
        <div className="container vh-100">
            <div className="d-flex flex-column align-items-center">
                <i className="fas fa-th-large align-self-start mt-3"></i>
                <Card id={user} />
                <i className="fas fa-chart-line align-self-end m-2"></i>
                <div className="btn-group" role="group" aria-label="Nav">
                    <button type="button" className="btn btn-outline-danger"><AccountBalance/><br/>Deposit</button>
                    <button type="button" className="btn btn-outline-danger"><Sync/><br/>Transfer</button>
                    <button type="button" className="btn btn-outline-danger"><LocalAtm/><br/>Widthdraw</button>
                </div>
            </div>
            <TransactionHistory id={user}/>
        </div>
    )
}

export default HomePage
