import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Card from './Card';

function HomePage() {
    const passedState = useLocation();
    const { state } = passedState;
    const user = state.verify;
    console.log(user)

    return (
        <div className="container vh-100">
            <div className="d-flex flex-column align-items-center">
                <i className="fas fa-th-large align-self-start mt-3"></i>
                <Card user={user} />
                <i className="fas fa-chart-line align-self-end m-2"></i>
                <div className="btn-group" role="group" aria-label="Nav">
                    <button type="button" className="btn btn-outline-danger">Widthdraw</button>
                    <button type="button" className="btn btn-outline-danger">Deposit</button>
                    <button type="button" className="btn btn-outline-danger">Transfer</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
