import LoginPage from './components/LoginPage';
import Accounts from './components/Accounts';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


// Sample local storage contents
window.localStorage.setItem('test@gmail.com', JSON.stringify({ 'password': '12345', 'isAdmin': true }))
window.localStorage.setItem('idk@gmail.com', JSON.stringify({ 'password': 'password', 'isAdmin': false, 'balance': 18000, 'accountNumber': 8888222311 }))
window.localStorage.setItem('idk1@gmail.com', JSON.stringify({ 'password': '11111', 'isAdmin': false, 'balance': 321000, 'accountNumber': 1234567 }))
//





function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/admin" component={Accounts}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
