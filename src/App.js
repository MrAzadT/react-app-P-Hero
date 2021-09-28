import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Setting from "./pages/Setting/Setting";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import TopBar from "./topbar/TopBar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
