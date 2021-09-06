import LoginPage from "./components/LoginPage";
import Admin from "./components/Admin.js";
import HomePage from "./components/HomePage";
import AdminTransaction from "./components/AdminTransaction.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";


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
