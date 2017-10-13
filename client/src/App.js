import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import LogIn from "./pages/LogIn";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/viewCity/:id" component={City} />
      </Switch>
    </div>
  </Router>;

export default App;
