import React from "react";
import { Route, Switch } from "react-router-dom";
import Guide from "./guide/Guide";
import Login from "./login/Login";
import Home from "./Home/Home";
import UserSettings from "./Home/user/UserSettings";
const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Guide} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/settings" component={UserSettings}></Route>
      </Switch>
    </div>
  );
};

export default Main;
