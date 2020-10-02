import React from 'react';
import '../assets/css/font.scss';
import '../assets/css/style.scss';
import Layout from "../component/Layout";
import TodoApp from "./TodoApp";
import Home from "../component/Home";
import Login from "../component/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
  <Layout>
        <Switch>
          <Route path="/auth">
            <Login />
          </Route>
          <Route path="/app">
            <TodoApp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
  </Layout>
  </Router>
  );
}

export default App;
