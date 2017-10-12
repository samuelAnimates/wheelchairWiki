import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/viewCity/:id" component={City} />
      </Switch>
    </div>
  </Router>;

export default App;
