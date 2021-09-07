import { useLocation } from 'react-router-dom';

function HomePage() {
    const passedState = useLocation();
    const {state} = passedState;
    const user = state.verify;
    console.log(user)

    return (
        <div>
            Account Number: {user.id}
            <br/>
            Balance: {user.balance}
        </div>
    )
}

export default HomePage
