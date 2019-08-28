import React from "react";
import { Route, Switch } from "react-router-dom";
import Guide from "./guide/Guide";
import Login from "./login/Login";
import Home from "./Home/Home";
import UserSettings from "./Home/user/UserSettings";
import UserInfo from "./Home/user/UserInfo";
import UserCollection from "./Home/user/UserCollection";
import ArticleDetailContainer from "./ArticleDetail/ArticleDetailContainer";
const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Guide} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/settings" component={UserSettings}></Route>
        <Route path="/userinfo" component={UserInfo}></Route>
        <Route path="/usercollection/:type" component={UserCollection}></Route>
        <Route
          path="/article-detail/:id"
          component={ArticleDetailContainer}
        ></Route>
      </Switch>
    </div>
  );
};

export default Main;
