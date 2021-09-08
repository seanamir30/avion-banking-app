import LoginPage from "./components/LoginPage";
import Admin from "./components/Admin.js";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// sample normal account

// window.localStorage.setItem(
//   "1002",
//   JSON.stringify({
//     name: "Another User",
//     password: "password",
//     isAdmin: false,
//     balance: 1000,
//     accountNumber: "1002",
//   })
// );

// window.localStorage.setItem(
//   "1001",
//   JSON.stringify({
//     name: "Normal User",
//     password: "password",
//     isAdmin: false,
//     balance: 400,
//     accountNumber: "1001",
//   })
// );
// admin login
window.localStorage.setItem(
  "admin@gmail.com",
  JSON.stringify({ password: "admin", isAdmin: true })
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
