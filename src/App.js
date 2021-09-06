import LoginPage from "./components/LoginPage";
import Admin from "./components/Admin.js";
import HomePage from "./components/HomePage";
import AdminTransaction from "./components/AdminTransaction.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Sample local storage contents
window.localStorage.setItem(
  "test@gmail.com",
  JSON.stringify({ password: "12345", isAdmin: true })
);
window.localStorage.setItem(
  "idk@gmail.com",
  JSON.stringify({
    password: "password",
    isAdmin: false,
    balance: 18000,
    id: 8888222311,
    name: "Sean",
  })
);
window.localStorage.setItem(
  "idk1@gmail.com",
  JSON.stringify({
    password: "11111",
    isAdmin: false,
    balance: 321000,
    id: 1234567,
    name: "John",
  })
);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/admin" component={Admin} />
          <Route
            exact
            path="/manage-transaction"
            component={AdminTransaction}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
