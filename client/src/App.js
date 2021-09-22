import React, { Component } from "react";
import Navbar from "./components/layout/Navbar"
import Landing from "./components/layout/Landing"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router className = "App" >
        <Navbar />
        <Route exact path="/" component={ Landing} />
        <Route exact path="/register" component={ Register} />
        <Route exact path="/login" component={ Login} />
      </Router>
    </Provider>
    );
  }
}
export default App;