import { useLocation } from 'react-router-dom';
import Card from './Card';

function HomePage() {
    const passedState = useLocation();
    const {state} = passedState;
    const user = state.verify;
    console.log(user)

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-center">
                <Card user={user}/>
            </div>
            {/* Account Number: {user.id}
            <br/>
            Balance: {user.balance} */}
        </div>
    )
}

export default HomePage
