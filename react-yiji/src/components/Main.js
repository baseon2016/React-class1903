import React from "react";
import { Route, Switch } from "react-router-dom";
import Guide from "./guide/Guide";
import Login from "./login/Login";
import Home from "./Home/Home";
const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Guide} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
};

export default Main;
