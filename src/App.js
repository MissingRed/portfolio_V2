import React from "react";
import Home from "./Pages/Home";
import Cv from "./Pages/Cv";

import Portfolio from "./Components/Portfolio";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Cv" component={Cv} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
