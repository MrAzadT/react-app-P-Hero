import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Setting from "./pages/Setting/Setting";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import TopBar from "./topbar/TopBar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "./post/Post";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/setting">{user ? <Setting /> : <Register />}</Route>
        <Route path="/post:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
