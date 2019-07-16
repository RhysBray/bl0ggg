import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import history from "./history";
import { Provider } from "react-redux";
import store from "./store";
import "./App.scss";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotPassword";
import InnerApp from "./containers/innerApp";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Register} />
            <Route path="/forgotten-password" component={ForgotPassword} />
            <Route path="/bl0gggg" component={InnerApp} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
