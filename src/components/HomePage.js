import { useLocation } from 'react-router-dom';
import Card from './Card';

function HomePage() {
    const passedState = useLocation();
    const {state} = passedState;
    const user = state.verify;
    console.log(user)

    return (
        <div className="container">
            <div className="d-flex flex-column align-items-center">
                <i class="fas fa-th-large align-self-start mt-3"></i>
                <Card user={user}/>
                <i class="fas fa-chart-line align-self-end m-2"></i>
            </div>
        </div>
    )
}

export default HomePage
