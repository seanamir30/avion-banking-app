import LoginPage from "./components/LoginPage.js";
import Admin from "./components/Admin.js";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

window.localStorage.setItem(
  "4148150944",
  JSON.stringify({
    id: "4148150944",
    email: "seanamir30@gmail.com",
    password: "123",
    isAdmin: false,
    balance: 31050,
    name: "Sean Amir Cafe",
    transactions: [
      { title: "withdraw", amount: "-500", date: "05/24", time: "13:00" },
      { title: "withdraw", amount: "+500", date: "05/24", time: "13:00" },
      { title: "Transfer", date: "10/8", amount: "-1000" },
      { title: "Transfer", date: "10/8", amount: "+2000" },
      { title: "Withdraw", date: "10/8", amount: "-1000" },
      { title: "Deposit", date: "10/8", amount: "+2000" },
      { title: "Withdraw", date: "10/8", amount: "-500" },
      { title: "Withdraw", date: "10/8", amount: "-2350" },
    ],
    balanceHistory: [
      { name: "9/11", balance: "3000" },
      { name: "9/12", balance: "3500" },
      { name: "9/13", balance: "3200" },
      { name: "9/14", balance: "4500" },
    ],
  })
);
window.localStorage.setItem(
  "00",
  JSON.stringify({ email: "admin@gmail.com", password: "admin", isAdmin: true })
);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
