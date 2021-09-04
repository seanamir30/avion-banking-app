import { useLocation } from 'react-router-dom';

function HomePage() {
    const passedState = useLocation();
    const {state} = passedState;
    const user = state.verify;

    return (
        <div>
            Account Number: {user.accountNumber}
            <br/>
            Balance: {user.balance}
        </div>
    )
}

export default HomePage
